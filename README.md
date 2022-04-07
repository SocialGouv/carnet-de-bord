# carnet-de-bord

## local

**pre-requis**:

- docker (version 20.10.5)
- docker-compose (version 1.29.0)
- node (version 16)
- hasura-cli (version 2.0.2)
- pre-commit https://pre-commit.com

**initialiser le projet**

```sh
#copier le projet
git clone git@github.com:SocialGouv/carnet-de-bord.git
cd carnet-de-bord

#installer les dépendances
yarn
yarn run husky install
pre-commit install
```

**lancer en local**

```sh
# créer le fichier `.env`
cp .env.sample .env

# démarrer l'application svelte
yarn dev

# démarrer hasura et postgres
docker-compose up

# initialiser les données de test
cd hasura
hasura seed apply

# lancer la console hasura
hasura console
```

## développement

**Génération des types graphql**

on écrit un fichier `_query.gql` ou `_mutation.gql`

```gql
# _query.gql
query SearchBeneficiaries($filter: String) {
	beneficiary(
		where: {
			_or: [
				{ peNumber: { _ilike: $filter } }
				{ cafNumber: { _ilike: $filter } }
				{ lastname: { _ilike: $filter } }
				{ mobileNumber: { _ilike: $filter } }
			]
		}
	) {
		dateOfBirth
		firstname
		id
		lastname
		mobileNumber
	}
}
```

on génère les types avec `codegen`

```sh
yarn codegen
```

Les types graphql sont générés dans `src/_gen`. On peut alors les utiliser dans les composants

```ts
export const load: Load = async ({ page }) => {
	const filter = page.query.get('filter');
	const result = operationStore(SearchBeneficiariesDocument, {
		filter: `%${filter}%`,
	});

	return {
		props: {
			result,
			filter,
		},
	};
};
```

**modification des metadatas hasura**

après avoir modifié des metadatas hasura dans la console (permissions, GraphQL field name, etc), ne pas oublier de les exporter

```sh
hasura metadata export
```

**migration de la base de données**

Si les modifications du schéma de la base de données ont faites à partir de la console hasura `http://localhost:9695/`, hasura génère automatiquement des fichiers de migrations dans `hasura/migrations`.

avant de `merge` une PR, ne pas oublier de (squash)[https://hasura.io/docs/latest/graphql/core/hasura-cli/hasura_migrate_squash.html] les fichiers.

Les migrations sont appliquées automatiquement au lancement de hasura

```sh
docker-compose up --build
```

## Pratique de l'équipe

Les modifications apportées au code doivent passer par des PR qui seront validées avant de pouvoir être versées dans la branche principale. On n'assigne pas forcément de relecteur, tout le monde est libre de relire la PR d'une autre personne.

Dans le cas où une personne de l'équipe de dev est seule, elle peut valider sa PR elle-même pour pouvoir avancer.

## Howto

### Exécuter un fichier de migration directement via postgres

```sh
docker-compose exec -T db psql --dbname carnet_de_bord --user cdb  < hasura/migrations/carnet_de_bord/${migration_name}/${up|down}.sql
```

### Faire une requête GraphQL portant sur une absence de relation

Si la table `account` peut porter un `professional_id`, il n'est pas possible de faire la requête suivante, pourtant valide pour des propriétés "internes" :

```graphql
query GetProfessionalsNotLinkedFromAccount {
	professional_aggregate(where: { account: { _is_null: true } }) {
		aggregate {
			count
		}
	}
}
```

Il faut la formuler comme suit :

```graphql
query GetProfessionalsNotLinkedFromAccount {
	professional_aggregate(where: { _not: { account: {} } }) {
		aggregate {
			count
		}
	}
}
```
