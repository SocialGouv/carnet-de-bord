#language: fr

@remove_admin_pdi
Fonctionnalité: Suppression d'un manager
	Pour pouvoir gérer plus facilement l'administration d'un déploiement
	En tant qu'admininstrateur carnet de bord
	Je veux pouvoir supprimer un manager d'un déploiement

	Scénario: Suppréssion d'un manager
		Soit un "administrateur cdb" authentifié avec l'email "support.carnet-de-bord+admin@fabrique.social.gouv.fr"
		Quand je clique sur "expérimentation 51"
		Alors je vois "Déploiement expérimentation 51"
		Quand je clique sur "Supprimer Siham Froger"
		Alors je vois "Supprimer un responsable"
		Quand je clique sur "Oui" dans le volet
		Alors je ne vois pas "Siham Froger"
