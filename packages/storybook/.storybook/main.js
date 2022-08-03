const path = require("path");
const webpack = require("webpack");

/** @type {import("@storybook/react/types").StorybookConfig} */
const storybookConfig = {
  stories: ["../../ui/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  staticDirs: [path.join(__dirname, "../../mock/public")],
  webpackFinal: (config) => ({
    ...config,
    plugins: [
      ...config.plugins,
      // ref: https://github.com/storybookjs/storybook/issues/17344
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],

    resolve: {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        // Webpack 5 no longer polyfills Node.js core modules automatically ref: https://webpack.js.org/configuration/resolve/#resolvefallback
        stream: require.resolve("stream-browserify"),
      },
    },
  }),
};

module.exports = storybookConfig;
