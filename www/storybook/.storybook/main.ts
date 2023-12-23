import { dirname, join } from "node:path";
import { type StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    "@storybook/addon-themes",
  ],
  framework: {
    // biome-ignore lint/suspicious/noExplicitAny: weird typing issue
    name: getAbsolutePath("@storybook/react-vite") as any,
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: ["@cloudmix-dev/react"],
        force: true,
      },
    });
  },
};

export default config;
