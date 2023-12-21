import { Code } from "@cloudmix-dev/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Code",
  component: Code,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

export const Default = {
  args: {
    children: `import path from "node:path";

export const ROOT_DIR = path.resolve(__dirname, "..");
    `,
    language: "typescript",
  },
};

export const WithNumbers = {
  args: {
    children: `import path from "node:path";

export const ROOT_DIR = path.resolve(__dirname, "..");
    `,
    language: "typescript",
    numbers: true,
    copy: false,
    fileExplorer: false,
  },
};

export const WithCopy = {
  args: {
    children: `import path from "node:path";

export const ROOT_DIR = path.resolve(__dirname, "..");
    `,
    language: "typescript",
    numbers: false,
    copy: true,
    fileExplorer: false,
  },
};

export const WithFileExporer = {
  args: {
    children: `import path from "node:path";

export const ROOT_DIR = path.resolve(__dirname, "..");
    `,
    language: "typescript",
    numbers: false,
    copy: false,
    fileExplorer: true,
  },
};
