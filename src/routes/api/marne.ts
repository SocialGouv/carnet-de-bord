import type {
	NotebookActionInsertInput,
	NotebookFocus,
	NotebookFocusInsertInput,
	NotebookTarget,
	NotebookTargetInsertInput,
} from '$lib/graphql/_gen/typed-document-nodes';
import type { BeneficiaryAccount } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import type {
	ExternalDeploymentApiBody,
	ExternalDeploymentApiOutput,
} from '../actions/update_notebook';
import type { MarneInput, MarneAction, MarneFocus } from './marne.types';

export const post: RequestHandler = async ({ request }) => {
	const { url, headers, input, accountId, notebookId, focuses } =
		(await request.json()) as ExternalDeploymentApiBody;
	try {
		const data: MarneInput = await fetch(`${url}${urlify(input)}`, { headers }).then(
			async (response) => {
				if (response.ok) {
					return response.json();
				}
				const errorMessage = await response.text();
				return Promise.reject(
					new Error(
						`api call failed (${response.status} - ${response.statusText})\n${errorMessage}`
					)
				);
			}
		);
		return {
			status: 200,
			body: parse(data, accountId, notebookId, focuses),
		};
	} catch (error) {
		console.error('[marne parser]', error, input);
		return {
			status: 500,
			body: 'API PARSE ERROR',
		};
	}
};

function parse(
	data: MarneInput,
	accountId: string,
	notebookId: string,
	existingFocuses: NotebookFocus[]
): ExternalDeploymentApiOutput {
	return {
		notebook: {
			...(data.educationLevel && { educationLevel: data.educationLevel }),
			...(data.rightRsa && { rightRsa: data.rightRsa }),
			...getLastContracts(data),
		},
		beneficiary: Object.fromEntries(
			Object.entries(parseBeneficiary(data)).filter(([_, v]) => v != null)
		),
		...parseFocuses(data, accountId, notebookId, existingFocuses),
	};
}

function parseBeneficiary(
	data: Omit<MarneInput, 'educationLevel' | 'rightRsa' | 'contracts' | 'axeDeTravails'>
): BeneficiaryAccount {
	return {
		firstname: capitalize(data.firstname),
		lastname: capitalize(data.lastname),
		dateOfBirth: data.dateOfBirth,
		mobileNumber: data.mobileNumber,
		email: data.email,
		address1: data.address1,
		address2: data.address2,
		postalCode: data.postalCode,
		city: data.city,
		cafNumber: data.cafNumber,
		peNumber: data.peNumber,
	};
}

function parseFocuses(
	data: Pick<MarneInput, 'axeDeTravails'>,
	creatorId: string,
	notebookId: string,
	existingFocuses: NotebookFocus[]
): Pick<ExternalDeploymentApiOutput, 'actions' | 'focuses' | 'targets'> {
	const existingTargets = existingFocuses.flatMap((focus) => focus.targets);
	const existingActions = existingTargets.flatMap((target) => target.actions);
	const existingActionIds = existingActions.map((action) => action.initialId).filter(Boolean);

	const focusWithNewActions = data.axeDeTravails.flatMap((focus) => {
		if (
			focus.actions.some((action) =>
				existingActionIds.includes(`${focus.code}_${action.type}_${action.code}`)
			)
		) {
			return [];
		}
		return [focus];
	});
	const focuses: NotebookFocusInsertInput[] = [];
	const targets: NotebookTargetInsertInput[] = [];
	const actions: NotebookActionInsertInput[] = [];

	for (const focus of focusWithNewActions) {
		const cdbfocus = findFocus(existingFocuses, focus);
		if (cdbfocus) {
			const situations = parseSituations(focus.actions);
			focuses.push({
				id: cdbfocus.id,
				situations: [...new Set(cdbfocus.situations.concat(situations))],
			});
			for (const action of focus.actions) {
				const cdbtarget = findTarget(cdbfocus, action);
				if (cdbtarget) {
					// existing target and focus
					actions.push({
						targetId: cdbtarget.id,
						action: action.action,
						creatorId,
						status: 'new',
						initialId: `${focus.code}_${action.type}_${action.code}`,
					});
				} else {
					// new target, existing focus
					// we need to check if we don't already add this target
					const cdbtheme = getCdbTheme(focus.theme);
					const targetName = getTargetFromAction(action, cdbtheme);
					const targetToCreate = targets.find(({ target }) => target === targetName);
					if (targetToCreate) {
						targetToCreate.actions.data.push(action);
					} else {
						targets.push({
							focusId: cdbfocus.id,
							target: targetName,
							creatorId,
							actions: {
								data: [marneActionToCdbAction(action, focus.code, creatorId)],
							},
						});
					}
				}
			}
		} else {
			// new focus / target / theme
			focuses.push({
				theme: marneThemesToCDBThemes[focus.theme] || focus.theme,
				creatorId,
				notebookId,
				...(focus.linkedTo && { linkedTo: focus.linkedTo.toLowerCase() }),
				situations: parseSituations(focus.actions),
				targets: { data: parseActions(focus, creatorId) },
			});
		}
	}
	const nbFocuses = focuses.length;
	const nbTargets = focuses.flatMap((focus) => focus.targets?.data ?? []).concat(targets).length;
	const nbActions = focuses
		.flatMap((focus) => focus.targets?.data.flatMap((target) => target.actions?.data ?? []) ?? [])
		.concat(targets.flatMap((target) => target.actions.data ?? []))
		.concat(actions).length;

	console.log(`parse: found ${nbFocuses} focus | ${nbTargets} targets | ${nbActions} actions`);

	return {
		focuses,
		targets,
		actions,
	};
}

function findFocus(existingFocuses: NotebookFocus[], focus: MarneFocus): NotebookFocus | null {
	const cdbtheme = marneThemesToCDBThemes[focus.theme.trim()] || focus.theme;
	return existingFocuses.find(
		({ theme, linkedTo }) => theme === cdbtheme && linkedTo === focus.linkedTo.toLowerCase()
	);
}

function findTarget(focus: NotebookFocus, action: MarneAction): NotebookTarget | null {
	const actionName = getTargetFromAction(action, focus.theme);
	if (!actionName) return null;

	return focus.targets.find(({ target }) => target.toLowerCase() === actionName.toLowerCase());
}

function parseSituations(actions: MarneAction[]): string[] {
	return actions.flatMap((action) => upperCaseFirstLetter(parseTarget('frein', action.objectif)));
}

function parseActions(focus: MarneFocus, creatorId: string): NotebookTargetInsertInput[] {
	const theme = getCdbTheme(focus.theme);
	const targetMap = focus.actions.reduce((targets, action) => {
		const target = getTargetFromAction(action, theme);
		if (!targets[target]) {
			targets[target] = {
				target,
				creatorId,
				actions: {
					data: [],
				},
			};
		}
		targets[target].actions.data.push(marneActionToCdbAction(action, focus.code, creatorId));
		return targets;
	}, {} as Record<string, NotebookTargetInsertInput>);
	return Object.values(targetMap);
}

function marneActionToCdbAction(
	data: MarneAction,
	focusCode: number,
	creatorId: string,
	targetId?: string
): NotebookActionInsertInput {
	return {
		action: data.action,
		creatorId,
		...(targetId && { targetId }),
		status: 'new',
		initialId: `${focusCode}_${data.type}_${data.code}`,
		createdAt: data.dateStart,
	};
}

function getCdbTheme(theme: string): string {
	const cdbTheme = marneThemesToCDBThemes[theme.trim()];
	if (!cdbTheme) {
		throw new Error(`Unknown theme ${theme}`);
	}
	return cdbTheme;
}

function getTargetFromAction(actionObj: MarneAction, cdbTheme: string): string {
	if (!actionsToTarget[cdbTheme]) {
		throw new Error(`Unknown theme ${cdbTheme} for action ${actionObj.action}`);
	}
	return actionsToTarget[cdbTheme][actionObj.action];
}
/**
 *
 * @param data Contract Array
 * @returns last contracts
 */
function getLastContracts(data: Pick<MarneInput, 'contracts'>) {
	const [contract] = data.contracts.sort(
		(a, b) => new Date(b.contractSignDate).getTime() - new Date(a.contractSignDate).getTime()
	);
	if (!contract) return {};
	return { contractSignDate: contract.contractSignDate, contractType: contract.contractType };
}

/**
 * Transform a beneficiary into a urls tokens
 * @param beneficiary BeneficiaryAccount
 * @returns a string which represent a beneficiary url tokens
 * ex : /LASTNAME/FIRSTNAME/DD-MM-YYYY
 */
function urlify(beneficiary: BeneficiaryAccount) {
	return `/${stripDiacritics(beneficiary.lastname).toUpperCase()}/${stripDiacritics(
		beneficiary.firstname
	).toUpperCase()}/${formatDate(beneficiary.dateOfBirth)}`;
}

/**
 * a function that remove diacritic from the letter
 * ex: ?? => e
 */
function stripDiacritics(input: string): string {
	const diacritics = '????????????????i??????????????????';
	const unaccented = 'aaaceeeeiiioouuuyy';
	const p = new RegExp(`[${diacritics}]`, 'g');
	return input
		.toString()
		.toLowerCase()
		.replace(p, (c: string) => unaccented.charAt(diacritics.indexOf(c)));
}

/**
 * reformat a YYYY-MM-DD date to DD-MM-YYYY
 */
function formatDate(date: string): string {
	return date.split('-').reverse().join('-');
}

function upperCaseFirstLetter(s: string) {
	if (s) {
		return `${s[0].toUpperCase()}${s.slice(1)}`;
	}
	return '';
}

function capitalize(text: string) {
	const parts = text.split(' ');
	return parts
		.map((part: string) => {
			const subparts = part.split('-');
			return subparts
				.map((s: string) => s.toLowerCase())
				.map((s: string) => upperCaseFirstLetter(s))
				.join('-');
		})
		.join(' ');
}

function parseTarget(key: string, target = '') {
	const pattern = new RegExp(`${key}\\s?:\\s?(.*)$`, 'i');
	const splits = target.split(/(\r\n|\r|\n)/).flatMap((line) => {
		const match = line.trim().match(pattern);
		return match ? [match[1].trim()] : [];
	});
	return splits.length > 0 ? splits[0] : target;
}

const actionsToTarget = {
	logement: {
		'Accompagnement li?? au logement': 'Acc??der ou se maintenir dans un logement',
		'Actions collectives li??es au logement':
			"S'informer sur les d??marches li??es au logement (budget, ??tat des lieux ???)",
		'DAHO, 115': "Trouver une solution d'h??bergement",
		'Accompagnement par le charg?? de mission logement': 'Acc??der ou se maintenir dans un logement',
		"Acc??s au logement Social de la Maison de l'Habitat":
			'Mise en ??uvre des pr??conisations du charg?? de mission logement ou travailleur social',
		'R??alisation autonome des d??marches li??es au logement au regard des conseils formul??s par un travailleur social':
			'Mise en ??uvre des pr??conisations du charg?? de mission logement ou travailleur social',
		"Les aides financi??res ?? l'acc??s ou au maintien dans le logement FSL ":
			"Favoriser l'acc??s au logement ou la r??sorption d'un impay??",
	},
	difficulte_financiere: {
		'Action Educative Budg??taire (AEB)':
			"Pr??venir le surendettement et tendre vers l'autonomie de la gestion budg??taire",
		'L???accompagnement budg??taire':
			"Acqu??rir des comp??tences techniques et administratives dans le but d'??viter l???aggravation de la situation financi??re",
		'L???accompagnement social personnalis??':
			'Acqu??rir une autonomie sociale et budg??taire ou une mesure de protection',
	},
	contraintes_familiales: {
		'Acc??s ?? un mode de garde': 'Recherche de mode de garde',
	},
	mobilite: {
		'La navette insertion':
			"Favoriser l'acc??s aux dispositifs d'insertion sociale ou professionnel",
		'aide ?? la mobilit?? du CCAS':
			"B??n??ficier d'une aide financi??re pour le passage du permis de conduire ou achant de v??hicule",
		'Conseiller en mobilit?? inclusive':
			"B??n??ficier d'un accompagnement permettant d'acc??der ?? la mobilit??",
		'Bourse au permis': "B??n??ficier d'une aide financi??re pour le passage du permis de conduire",
		'Pr??paration au code': "B??n??ficier d'un accompagnement pour le passage du code de la route",
		'Location /Achat v??hicule':
			"Favoriser l'acc??s aux dispositifs d'insertion sociale ou professionnelle",
		'Passage du permis B (code et conduite)':
			"Acqu??rir les comp??tences garantissant la r??ussite au code et ?? l'examen de conduite",
	},
	sante: {
		PAIS: 'Etre accompagn?? dans les d??marches acc??s au soin',
		APS: "B??n??ficier d'un accompagnement de proximit?? favorisant l'am??lioration de son ??tat de sant??",
		'Bilan de sant?? CMPS': 'Faire un bilan de sant?? complet et engager un parcours de soins',
		'Suivi sant??': 'B??n??ficier de soins',
	},
	difficulte_administrative: {
		'Coordonnatrice de Lev??e des Freins P??riph??riques':
			"Identification et appui dans la r??alisation des d??marches/Relais  avec les partenaires/Mise en ??uvre d'aides financi??res",
		"L'accompagnement social personnalis??":
			'Acqu??rir une autonomie sociale et budg??taire ou une mesure de protection',
		"L???accompagnement par les travailleurs sociaux en mati??re d'acc??s au droit":
			'Acc??der ?? un droit',
		"R??alisation autonome des d??marches li??es ?? l'acc??s aux droits":
			'Mise en ??uvre des pr??conisations du travailleur social',
		'Ecrivain Public Num??rique': 'Accompagnement dans les d??marches num??riques',
		"Accompagnement ?? la constitution d'un dossier de surendettement ":
			'R??tablir la situation financi??re',
		'Les aides des ??piceries sociales': 'Acc??der ?? une aide alimentaire et un accompagnement',
		'Mesures de protection administratives ou judiciaires (MASP, tutelle, curatelle, sauvegarde de justice,...)':
			"Mise en place d'une mesure d'accompagnement adapt??",
		'APA, PCH,???': "Acc??der ?? une indemnisation de compensation de l'accompagnement",
	},
	maitrise_langue: {
		'Ateliers socio-linguistiques Maison de quartier':
			'Acqu??rir les comp??tences langagi??res de base ?? une insertion',
		'Parcours langue': 'Acqu??rir les comp??tences langagi??res de base ?? une insertion',
	},
	emploi: {
		"Orientation vers un Chantier d'insertion (ACI)": 'Acc??der ??  un CDDI',
		'CEC/CIE': 'Acc??der ?? un emploi aid??',
		Shaker:
			'Acc??der ?? une qualification en lien avec les m??tiers en tension  (BTP, propret??, logistique, industrie,...)',
		'Coaching intensif':
			"Acc??der rapidement ?? un emploi gr??ce ?? la mise en ??uvre d'une strat??gie de recherches d'emploi en ad??quation avec le projet professionnel",
		'Espace Linguistique Pro (ELP)':
			"Acqu??rir les comp??tences langagi??res n??cessaires ?? la reprise d'un emploi",
		REAGIR:
			"Etre accompagn?? pour red??finir un projet professionnel, ??tre accompagn?? pour d??velopper et am??liorer l'activit??",
		'Permanence du Jard':
			"Evaluer ses capacit??s de retour ?? l'emploi / ??valuer une orientation ESAT sur demande de la MDPH ou en amont d'une demande MDPH / b??n??ficier d'un accompagnement adapt?? ?? la RQTH",
		"Partenariat Chambre de l'agriculture": "Faciliter l'acc??s ?? l'emploi agricole",
		'RSA et Vendanges en Champagne': "Faciliter l'acc??s aux vendanges",
		'Accompagnement des TNS': "Faciliter le d??veloppement et la viabilit?? ??conomique de l'activit??",
		'PLATEFORME actif51':
			'Favoriser la mise en relation entre un candidat et un employeur en aidant les b??n??ficiaires ?? mieux cibler les emplois de proximit??',
		'Coaching ':
			"Identifier ses atouts et ses freins dans la recherche d'emploi et d??finir une strat??gie de recherche d'emploi en ad??quation avec le march?? du travail",
		'Coaching dip??m??s':
			"Identifier ses atouts et ses freins dans la recherche d'emploi et d??finir une strat??gie de recherche d'emploi en ad??quation avec le march?? du travail",
		'Coaching Sport et Loisirs':
			"Identifier ses freins li??s ?? l'acc??s ?? l'emploi dans le domaine du sport et des loisirs.  D??finir et mettre en ??uvre un plan d'action permettant de lever ces freins.",
		'Orientation vers AI/ETTI': 'Incription HUMANDO / SUEZ Insertion/Partage Travail',
		'Partenariat int??rim': "Inscription ?? l'agence Triangle",
		'P??le Emploi': 'Inscription ?? P??le Emploi',
		'Inscription Interim': "Inscription en agence d'int??rim",
		'CAP Emploi': 'Inscription et/ou CAP Emploi',
		PAUPA: 'Inscription sur actif51',
		'Suites accompagnement sp??cialis?? TNS':
			"Mise en ??uvre des pr??conisations d'une structure d'accompagnement sp??cialis??e de type ADIE, CCI...",
		'Comit?? Rebond':
			"Mobiliser l'ensemble des partenaires du SPIE et de nouveaux dispositifs concourant au rebond de l'usager",
		'Accompagnement global':
			"Proposer un accompagnement conjoint par le conseiller de P??le emploi et le charg?? de mission RSA du D??partement, permettant  de lever l'ensemble des freins et d'acc??der ?? l'emploi",
	},
	formation: {
		'Itin??raire Bis':
			'Acc??der ?? la citoyennet?? par une meilleure int??gration sociale et culturelle',
		'Recherche de formation': 'Acc??der ?? la formation',
		'Service Militaire Volontaire': 'Acc??der ?? un accompagnement',
		'Accompagnement MILO': 'Acc??der ?? un accompagnement',
		'Le Partenariat Garantie Jeunes (exp??rimental)':
			'Acc??der au parcours d???accompagnement propos?? dans le cadre de la Garantie Jeunes',
		"Parcours d'Acquisition des Comp??tences en Entreprise (PACE)":
			"Acqu??rir des comp??tences en entreprise favorisant l'employabilit??",
		'Le Service civique':
			"Acqu??rir et/ou d??velopper  des comp??tences et de l'exp??rience au travers d???une int??gration au sein d???un collectif et d???une mission sp??cifique confi??e aux jeunes",
		"Atelier d'initiation aux savoirs de base num??riques":
			"Acqu??rir les comp??tences de base num??riques permettant l'acc??s aux droits et favorisant l'insertion",
		'Parcours langue': 'Acqu??rir les comp??tences langagi??res de base ?? une insertion',
		'Ateliers socio-linguistiques Maison de quartier':
			'Acqu??rir les comp??tences langagi??res de base ?? une insertion',
		"Activ'comp??tences":
			"Acqu??rir les fondamentaux permettant la construction d'un parcours d'insertion",
		'Diagnostics individuels approfondis (DIA)':
			'Am??liorer la connaissance des savoirs de base ou du potentiel de b??n??ficiaires du RSA',
		'Pr??pa comp??tences': "D??finition d'un parcours de formation personnalis??",
		'Ecole de la 2??me chance':
			"Elaborer un parcours p??dagogique favorisant l'insertion professionnelle",
		"Ateliers d'int??gration ?? vis??e professionnelle":
			'Remobiliser les b??n??ficiaires du RSA dans un parcours d???insertion socio-professionnel',
	},
};
const marneThemesToCDBThemes = {
	"PRO1 Acc??s Offres d'Emploi Sp??cifiques": 'emploi',
	'PRO1 Accompagnement Parcours Insertion Pro': 'emploi',
	"PRO1 Accompagnement Renforc?? vers et dans l'emploi": 'emploi',
	"PRO1 Accompagnement Sp??ci. Cr??ateurs d'Entpse": 'emploi',
	'PRO1 Accompagnement sp??cifique Jeunes Dipl??m??s': 'emploi',
	'PRO1 Accompagnement Sp??cifique TH': 'emploi',
	'PRO1 En emploi aid??': 'emploi',
	'PRO1 En emploi non aid??': 'emploi',
	"PRO1 Evaluation d'autonomie professionnelle": 'emploi',
	'PRO1 Evaluation professionnelle': 'emploi',
	"PRO1 Parcours autonome acc??s direct ?? l'emploi": 'emploi',
	'PRO1 Parcours de Formation': 'formation',
	'PRO1 Parcours de Qualification': 'formation',
	'PRO1 Travailleurs ind??pendants': 'emploi',
	'PRO2 Accompagnement Parcours Insertion Pro': 'emploi',
	'PRO2 Evaluation Parcours Insertion Pro': 'emploi',
	'PRO2 Parcours IAE': 'emploi',
	'SOCPRO1  Recherche mode de garde': 'contraintes_familiales',
	'SOCPRO1 Accomp. Parcours post formation prof.': 'formation',
	'SOCPRO1 Financement Formation APRE': 'formation',
	'SOCPRO1 Parcours Formation': 'formation',
	'SOCPRO1 Passage Permis VL APRE': 'mobilite',
	'SOCPRO1 Poursuite scolarit??': 'formation',
	'SOCPRO1 SAS Formations/Validation en entreprises': 'formation',
	'SOCPRO1 Scolarit??': 'formation',
	'SOCPRO2 Accomp. Coaching': 'formation',
	'SOCPRO2 Accomp. Coaching dipl??m??s': 'formation',
	'SOCPRO2 Accomp. Emergence Socio Professionnelle': 'formation',
	'SOCPRO2 Accomp. Sp??cif. Jeunes Chantiers Educatifs': 'emploi',
	'SOCPRO2 Accomp. Sp??cif. Jeunes Contrat Civis': 'emploi',
	'SOCPRO2 Accomp. Sp??cif. Jeunes Ecole 2??me Chance': 'formation',
	'SOCPRO2 Accomp. Sp??cif. jeunes MILO': 'formation',
	'SOCPRO2 ACQUIS. Comp??tence de base Spec. Informat.': 'formation',
	'SOCPRO2 ACQUIS. Comp??tences de base Niv1 Alphab.': 'formation',
	'SOCPRO2 ACQUIS. Comp??tences de base Niv2': 'formation',
	'SOCPRO2 Auto ??cole sociale': 'mobilite',
	"SOCPRO2 Orientation vers un Chantier d'Insertion": 'emploi',
	"SOCPRO2 Parcours Chantier d'Insertion": 'emploi',
	'SOCPRO2 Parcours int??gration CUI 7 heures': 'emploi',
	'SOCPRO2 Parcours pr??-int??gration CI': 'emploi',
	'SOCPRO2 Pr??-Pro Public Sp??cifique': 'formation',
	'SOC1 LG1 Acc??s au logement d??cent': 'logement',
	'SOC1 LG1 Maintien dans le logement': 'logement',
	'SOC1 ST1 HKP Attribution AAH': 'sante',
	'SOC1 ST1 HKP Reconnaissance TH': 'sante',
	'SOC1 ST1 MAT Parcours de soins': 'sante',
	'SOC1 ST1 MEDIC Parcours Acc??s aux soins': 'sante',
	'SOC1 ST1 MEDIC-PSY Parcours Acc??s aux soins': 'sante',
	'SOC1 ST1 Parcours Bilan de sant??': 'sante',
	'SOC2 Acc??s au Droit de la Famille': 'difficulte_administrative',
	'SOC2 Acc??s au Droit du Travail': 'difficulte_administrative',
	'SOC2 Accomp Soutien Parcours Sant?? Tierce Personne': 'sante',
	'SOC2 Alphab??tisation renforc??e': 'maitrise_langue',
	"SOC2 Reconnaissance du Statut d'Aidant Familial": 'contraintes_familiales',
	'SOC2 S??curisation GAB Mesure Banque de France': 'difficulte_financiere',
	'SOC2 S??curisation GAB Mesure Protection Judiciaire': 'difficulte_administrative',
	'SOC2 S??curisation GAB R??glement cr??ance amiable': 'difficulte_financiere',
	'SOC2 ST2 HDK Attribution AAH': 'sante',
	'SOC2 ST2 HDK Reconnaissance TH': 'sante',
	'SOC2 ST2 MEDIC Parcours acc??s aux soins': 'sante',
	'SOC2 ST2 MEDIC-PSY Parcours acc??s aux soins': 'sante',
	'SOC2 ST2 MEDIC-PSY Parcours bilan de sant??': 'sante',
	'SOC2 ST2 Parcours Bilan de sant??': 'sante',
	'zNE + UTILISER PRO2 Acc Sp??cif Jeune Contrat CIVIS': 'emploi',
	'zNE+UTILISER PRO2 Acc Sp??c Jeunes Ecole 2?? Chance': 'formation',
	'zNE+UTILISER PRO2 Accomp. Sp??cif. Jeunes MILO': 'emploi',
	'zNE+UTILISERPRO2 Acc Sp??c. Jeune Chantier Educatif': 'formation',
	"1- Acc??s rapide ?? l'emploi": 'emploi',
	'2- Renforcement des comp??tences et savoirs ??tre': 'formation',
	'3- Lever les freins p??riph??riques': 'mobilite',
	'4- Acc??s ?? la sant??': 'sante',
	'6- Parentalit??': 'contraintes_familiales',
	'8- Int??grer et se maintenir ds le logement': 'logement',
	"9- Favoriser l'autonomie sociale et budg??taire": 'difficulte_financiere',
};
