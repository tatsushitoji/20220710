/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "next",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react/jsx-props-no-spreading": [
      "error",
      {
        html: "ignore",
        custom: "ignore",
        explicitSpread: "ignore",
        exceptions: [""],
      },
    ],
    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function" },
    ],
    "react/require-default-props": "off",
  },
};
