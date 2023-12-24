import { ThemeSelector } from "@cloudmix-dev/react";
import { type Meta } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof ThemeSelector> = {
  title: "Components/ThemeSelector",
  component: ThemeSelector,
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

export const Default = {};

export const WithLocalStorageKey = {
  args: {
    localStorageKey: "theme",
  },
};
