import { initialize, mswDecorator } from "msw-storybook-addon";
import { UIProvider } from "ui";

// Initialize MSW
initialize();

/** @type {import('@storybook/react').DecoratorFn}  */
const withUIProvider = (Story) => (
  <UIProvider>
    <Story />
  </UIProvider>
);

/** @type {import('@storybook/react').DecoratorFn[]}  */
export const decorators = [mswDecorator, withUIProvider];

/** @type {import('@storybook/react').Parameters} */
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
};
