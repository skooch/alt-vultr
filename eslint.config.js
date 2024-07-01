import js from "@eslint/js";
import ts from "typescript-eslint";
import prettier from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  ...ts.configs.strictTypeChecked,
  prettier,
  {
    languageOptions: {
      parserOptions: {
        project: true
      }
    }
  },
  {
    prettierOptions: {
      experimentalTernaries: true,
      semi: false,
      singleQuote: true
    }
  },
  {
    ignores: [
      'vultr-types/',
      'dist/',
      'eslint.config.js'
    ]
  }
];