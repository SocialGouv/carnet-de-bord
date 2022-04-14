#language: fr

@onboarding_admin_structure
Fonctionnalité: Onboarding administrateur de structure
	Pour pouvoir finaliser la création de mon compte
	En tant qu'administrateur de structure
	Je veux pouvoir saisir et valider mes informations personnelles

	Scénario: Première connexion - Mise à jour profil
		Soit un "administrateur de structures" authentifié pour la première fois avec l'email "jacques.celaire@beta.gouv.fr"
		Quand je vois "Création de mon compte Gestionnaire de structure"
		Alors je vois "Jacques" dans le champ "Prénom"
		Alors je vois "Célaire" dans le champ "Nom"
		Alors je vois "jacques.celaire@beta.gouv.fr" dans le champ "Courriel"
		Alors je vois "0102030405" dans le champ "Numéros de téléphone"
		Quand je clique sur "Créer mon compte"
		Alors je vois "Votre compte a été créé avec succès"