import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import ts from 'typescript-eslint';

export default [
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
