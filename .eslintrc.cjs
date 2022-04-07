module.exports = {
	root: true,
	env: {
		node: true,
		jest: true,
	},
	plugins: ['svelte3', '@typescript-eslint'],
	extends: ['eslint:recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019,
	},
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	settings: {
		'svelte3/typescript': () => require('typescript'), // pass the TypeScript package to the Svelte plugin
		// OR
		'svelte3/typescript': true, // load TypeScript as peer dependency
		// ...
	},
	// Temporary hack, current codebase should be checked for this
	rules: {
		'no-unused-vars': 'off',
	},
};
