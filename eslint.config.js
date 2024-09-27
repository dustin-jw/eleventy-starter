const globals = require('globals');
const js = require('@eslint/js');
const prettier = require('eslint-config-prettier');
const ts = require('typescript-eslint');

module.exports = [
	js.configs.recommended,
  ...ts.configs.recommended,
	prettier,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
			},
		},
	},
	{
		ignores: ['node_modules', 'dist', 'coverage', 'playwright-report'],
	},
  {
    rules: {
      '@typescript-eslint/no-require-imports': 0,
    }
  }
];
