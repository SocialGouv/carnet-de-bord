<script lang="ts">
	import type {
		BeneficiaryAggregate,
		Deployment,
		Manager,
		ProfessionalAggregate,
		StructureAggregate,
	} from '$lib/graphql/_gen/typed-document-nodes';
	import Dialog from '$lib/ui/Dialog.svelte';
	import AdminNotebookUpdate from './NotebookUpdate.svelte';
	import Button from '../base/Button.svelte';
	import AdminCreate from '../AdminCreate/AdminCreate.svelte';
	import { openComponent } from '$lib/stores';

	type StructureAggregateSub = Pick<StructureAggregate, 'aggregate'>;
	type BeneficiariesAggregateSub = Pick<BeneficiaryAggregate, 'aggregate'>;
	type ManagerSub = Pick<Manager, 'id' | 'firstname' | 'lastname'>;

	export let deployment: Pick<Deployment, 'label' | 'id' | 'config'> & {
		managers: ManagerSub[];
		structures_aggregate: StructureAggregateSub;
		beneficiaries_aggregate: BeneficiariesAggregateSub;
	};

	type ProfessionalAggregateSub = Pick<ProfessionalAggregate, 'aggregate'>;

	export let professional_aggregate: ProfessionalAggregateSub;
	export let refreshStore: () => void;

	function onAddAdminPdiClick() {
		openComponent.open({
			component: AdminCreate,
			props: {
				deploymentId: deployment.id,
				onClose: () => {
					refreshStore();
				},
			},
		});
	}
</script>

<h1 class="fr-h2">
	Déploiement <span class="text-france-blue-500">{deployment?.label ?? ''}</span>
</h1>
<div class="flex justify-between items-center">
	<Button classNames="self-end" on:click={onAddAdminPdiClick}>Ajouter une admin pdi</Button>
</div>
<div class="fr-container--fluid">
	<div class="fr-grid-row fr-grid-row--gutters">
		<div class="fr-col-md-3 fr-m-2v fr-p-4v bg-gray-bg">
			{deployment?.structures_aggregate.aggregate.count} <br /> Structures
		</div>
		<div class="fr-col-md-3 fr-m-2v fr-p-4v bg-gray-bg">
			{professional_aggregate?.aggregate.count} <br /> Professionnels
		</div>
		<div class="fr-col-md-3 fr-m-2v fr-p-4v bg-gray-bg">
			{deployment?.beneficiaries_aggregate.aggregate.count} <br /> Bénéficiaires
		</div>
	</div>
	<div class="fr-grid-row fr-grid-row--gutters">
		<div class="fr-col-md-3 fr-m-2v fr-p-4v">
			<div class="flex">
				{#if deployment?.config?.url && deployment?.config?.callback}
					<Dialog
						label="Mise a jour des carnets"
						buttonLabel="Mettre à jour les carnets"
						title="Mise a jour des carnets"
						size={'large'}
						showButtons={false}
					>
						<AdminNotebookUpdate deploymentId={deployment?.id} />
					</Dialog>
				{/if}
			</div>
		</div>
	</div>
</div>
