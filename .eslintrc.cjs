module.exports = {
	root: true,
	extends: [
    "standard",
    "plugin:functional/lite"
	],
	rules: {
    "no-multiple-empty-lines": ["error", {"max": 2, "maxBOF": 0, "maxEOF": 0}],
    "space-before-function-paren": ["error", "always"],
    "func-call-spacing": ["error", "always", { "allowNewlines": true }],
    "comma-dangle": ["error", "always-multiline"],
    "no-unexpected-multiline": "off"
	},
	plugins: [
		'svelte3',
		'functional'
	],
	overrides: [{ 
		files: ['*.svelte'], 
		processor: 'svelte3/svelte3',
		rules: {
			'import/first': 'off',
			'import/no-duplicates': 'off',
			'import/no-mutable-exports': 'off'
		}
	}],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
