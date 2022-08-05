/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */

module.exports = {
  root: true,
  extends: ['@packages/eslint-config-custom'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
}
