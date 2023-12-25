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
    description: "",
    placeholder: "Text field...",
    isRequired: false,
    isDisabled: false,
  },
};

export const WithDescription = {
  args: {
    label: "",
    description: "This is a text field",
    placeholder: "Text field...",
    isRequired: false,
    isDisabled: false,
  },
};

export const Required = {
  args: {
    label: "Text Field",
    description: "",
    placeholder: "Text field...",
    isRequired: true,
    isDisabled: false,
  },
};

export const Disabled = {
  args: {
    label: "",
    description: "",
    placeholder: "Text field...",
    isRequired: false,
    isDisabled: true,
  },
};

type SkeletonStory = StoryObj<typeof TextField.Skeleton>;

export const Skeleton: SkeletonStory = {
  render: (props) => <TextField.Skeleton {...props} />,
  args: {
    label: true,
    description: true,
  },
};
