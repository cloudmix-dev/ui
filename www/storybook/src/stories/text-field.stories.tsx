import { TextField } from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
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
    placeholder: "Text field...",
  },
};

export const WithLabel = {
  args: {
    label: "Text Field",
    placeholder: "Text field...",
  },
};

export const WithDescription = {
  args: {
    description: "This is a text field",
    placeholder: "Text field...",
  },
};

export const Required = {
  args: {
    label: "Text Field",
    isRequired: true,
    placeholder: "Text field...",
  },
};

export const Disabled = {
  args: {
    label: "Text Field",
    isDisabled: true,
    placeholder: "Text field...",
  },
};

type SkeletonStory = StoryObj<typeof TextField.Skeleton>;

export const Skeleton: SkeletonStory = {
  render: () => <TextField.Skeleton label description />,
};
