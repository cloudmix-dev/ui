import { Code } from "@cloudmix-dev/react";
import { type Meta } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof Code> = {
  title: "Components/Code",
  component: Code,
  decorators: [
    (Story: React.ComponentType) => (
      <StoryLayout>
        <Story />
      </StoryLayout>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    content: `import path from "node:path";

export const ROOT_DIR = path.resolve(__dirname, "..");
    `,
    language: "typescript",
    numbers: false,
    copy: false,
    fileExplorer: false,
  },
};

export const WithNumbers = {
  args: {
    content: `import path from "node:path";

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
    content: `import path from "node:path";

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
    content: `import path from "node:path";

export const ROOT_DIR = path.resolve(__dirname, "..");
    `,
    language: "typescript",
    numbers: false,
    copy: false,
    fileExplorer: true,
  },
};
