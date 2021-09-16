import { buildKeys } from '$lib/utils/keysBuilder';

// NOTEBOOK KEYS
/* ----------------------------------------------- */

export const workSituationKeys = buildKeys({
	recherche_emploi: "En recherche d'emploi",
	recherche_formation: 'En recherche de formation',
	recherche_alternance: 'En recherche d’alternance',
	recherche_stage: 'En recherche de stage',
	emploi: 'En emploi',
	formation: 'En formation',
	stage: 'En stage',
	alternance: 'En alternance',
	service_civique: 'En service civique',
	cdd: 'En CDD',
	cdi: 'En CDI',
	iae: 'En IAE',
	interim: 'En interim',
	construction_projet: 'En construction de projet',
	projet_entrepreneurial: 'En projet entrepreneurial',
	entrepreneur: 'Entrepreneur',
});

export const rsaRightKeys = buildKeys({
	rsa_droit_ouvert_et_suspendu: 'Droit ouvert et suspendu',
	rsa_droit_ouvert_versable: 'Droit ouvert et versable',
	rsa_droit_ouvert_versement_suspendu: 'Droit ouvert mais versement suspendu',
});

export const geographicalAreaKeys = buildKeys({
	less_10: 'Mois de 10 km',
	between_10_20: 'Entre  10 et 20 km',
	between_20_30: 'Entre  20 et 30 km',
	plus_30: 'Plus de 30 km',
});

export const contractTypeKeys = buildKeys({
	cer: 'CER',
	ppae: 'PPAE',
	pacea: 'PACEA',
});

export const contractTypeFullKeys = buildKeys({
	cer: "Contrat d'Engagement Réciproque (CER)",
	ppae: "Projet Personnalisé d'Accès à l'Emploi (PPAE)",
	pacea: "Parcours contractualisé d'Accompagnement vers l'Emploi et l'Autonomie (PACEA)",
});

export const educationLevelKeys = buildKeys({
	level_1: 'Niveau I : enseignement supérieur',
	level_2: 'Niveau II : BAC +3 / +4',
	level_3: 'Niveau III : BAC +2',
	level_4: 'Niveau IV : BAC ou équivalent',
	level_5: 'Niveau V : CAP/BEP',
	level_6: 'Formation courte max 1 mois',
	level_7: 'Pas de formation / Pas de diplôme',
});

/* ----------------------------------------------- */
/* ----------------------------------------------- */

// FOCUS KEYS

export const focusThemeKeys = buildKeys({
	logement: 'Logement',
	sante: 'Santé',
	contraintes_familiales: 'Contraintes familiales',
});

export const situationKeys = buildKeys({
	sans_hebergement: 'Sans hébergement',
	chrs: 'CHRS',
	hotel_social: 'Hôtel social',
	foyer_urgence: "Foyer d'urgence",
	ppartement_relais: 'Appartement relais',
	bail_glissant: 'Bail glissant',
	logement_insalubre: 'Logement insalubre',
	expulsion: 'Expulsion en cours',
	difficulter_payer: 'Difficulté à payer le loyer',
	chez_tiers: 'Chez un tiers',
	autre: 'Autre',
});

export const focusToSituations = {
	logement: [
		'sans_hebergement',
		'chrs',
		'hotel_social',
		'foyer_urgence',
		'ppartement_relais',
		'bail_glissant',
		'logement_insalubre',
		'expulsion',
		'difficulter_payer',
		'chez_tiers',
		'autre',
	],
};

export const targetKeys = buildKeys({
	acces_droits: 'Accès Droits',
	recherche_logement: 'Recherche de logement',
});

export const actionKeys = buildKeys({
	demande_domiciliation: 'Demande de domiciliation',
	droit_logement_opposable: 'Droit au logement opposable',
});
