const path = require("path");

/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */

module.exports = {
  root: true,
  extends: ["custom"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {
    "import/prefer-default-export": "off",
  },
  overrides: [
    {
      files: ["*.stories.tsx"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            // This option is to specify the path to the folder containing package.json. Stories file need some type from '@storybook/react'
            packageDir: path.join(__dirname, "../storybook"),
          },
        ],
      },
    },
  ],
};
