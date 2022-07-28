const webpack = require("webpack");

/** @type {import("@storybook/react/types").StorybookConfig} */
const storybookConfig = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../../ui/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
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
