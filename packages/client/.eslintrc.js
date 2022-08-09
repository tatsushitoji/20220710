/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */

module.exports = {
  root: true,
  extends: [
    '@packages/eslint-config-custom',
    'next/core-web-vitals',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ['pages/**/*.tsx'],
      rules: {
        'import/prefer-default-export': 'error',
      },
    },
  ],
}
