#language: fr

@appointments
Fonctionnalité: Gestion des RDV bénéficiaires
	En tant que pro
	Je veux consulter et gérer les RDV de mes bénéficiaires

	Scénario: Aucun rendez-vous
		Soit le pro "pierre.chevalier@livry-gargan.fr" sur le carnet de "Tifour"
		Quand je clique sur "Groupe de suivi"
		Quand je clique sur le texte "Pierre Chevalier"
		Alors je vois "Aucun rendez-vous n'a été pris avec cet accompagnateur."

	Scénario: Ajout de RDV
		Soit le pro "pierre.chevalier@livry-gargan.fr" sur le carnet de "Tifour"
		Quand je clique sur "Groupe de suivi"
		Quand je clique sur le texte "Pierre Chevalier"
		Quand je clique sur "Ajouter un rendez-vous"
		Quand je renseigne "01/01/2020" dans le champ "Date de rendez-vous"
		Quand je selectionne l'option "Présent" dans la liste "Statut du rendez-vous"
		Quand je clique sur "Valider"
		Quand je clique sur "Ajouter un rendez-vous"
		Quand je renseigne "02/01/2020" dans le champ "Date de rendez-vous"
		Quand je selectionne l'option "Absent" dans la liste "Statut du rendez-vous"
		Quand je clique sur "Valider"
		Alors je vois "01/01/2020"
		Alors je vois "Présent"
		Alors je vois "02/01/2020"
		Alors je vois "Absent"

