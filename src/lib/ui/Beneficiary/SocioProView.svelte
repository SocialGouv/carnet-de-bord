<script lang="ts">
	import {
		educationLevelKeys,
		geographicalAreaKeys,
		rsaRightKeys,
		workSituationKeys,
	} from '$lib/constants/keys';
	import type { GetNotebookByBeneficiaryIdQuery } from '$lib/graphql/_gen/typed-document-nodes';
	import { pluralize } from '$lib/helpers';
	import { formatDateLocale, dateInterval } from '$lib/utils/date';
	import { Text } from '../utils';

	export let notebook: GetNotebookByBeneficiaryIdQuery['notebook'][0];

	function contractDatesTemplating(start: string, end: string) {
		if (end) {
			return `du ${formatDateLocale(start)} au ${formatDateLocale(end)}`;
		}
		return `Depuis le ${formatDateLocale(start)}`;
	}
</script>

<div class="flex flex-col space-y-6">
	{#if notebook.workSituationDate && notebook.workSituation}
		<div>
			<strong>{workSituationKeys.byKey[notebook.workSituation]}</strong>
			{contractDatesTemplating(notebook.workSituationDate, notebook.workSituationEndDate)}
			{#if notebook.workSituationEndDate}
				-
				<span class="italic font-bold">
					({dateInterval(notebook.workSituationDate, notebook.workSituationEndDate)})
				</span>
			{/if}
		</div>
	{/if}

	<div class="flex flex-row flex-wrap">
		<div class="w-1/2">
			<strong class="text-base text-france-blue">Droits</strong>
			<Text classNames="mb-2" value={`RSA - ${rsaRightKeys.byKey[notebook.rightRsa]}`} />
			{#if [notebook.rightRqth, notebook.rightAre, notebook.rightBonus, notebook.rightAss].filter( (field) => Boolean(field) ).length > 0}
				<p>
					{[
						notebook.rightRqth && 'RQTH',
						notebook.rightAre && 'ARE',
						notebook.rightAss && 'ASS',
						notebook.rightBonus && 'Bonus',
					]
						.filter((field) => Boolean(field))
						.join(', ')}
				</p>
			{/if}
		</div>

		<div class="w-1/2">
			<strong class="text-base text-france-blue">
				{pluralize('Emploi', notebook.wantedJobs.length)}
				{pluralize('recherché', notebook.wantedJobs.length)}
			</strong>
			<Text
				classNames="mb-2"
				value={notebook.wantedJobs.map(({ rome_code }) => rome_code.label).join(', ')}
			/>
		</div>
		<div class="w-1/2">
			<strong class="text-base text-france-blue">Zone de mobilité</strong>
			<Text classNames="mb-2" value={geographicalAreaKeys.byKey[notebook.geographicalArea]} />
		</div>
		<div class="w-1/2">
			<strong class="text-base text-france-blue">Niveau de formation</strong>
			<Text classNames="mb-2" value={educationLevelKeys.byKey[notebook.educationLevel]} />
		</div>
	</div>
</div>
