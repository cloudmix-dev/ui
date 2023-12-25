import { NumberField } from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof NumberField> = {
  title: "Components/NumberField",
  component: NumberField,
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
    placeholder: "Number field...",
  },
};

export const WithLabel = {
  args: {
    label: "Number Field",
    description: "",
    placeholder: "Number field...",
    isRequired: false,
    isDisabled: false,
  },
};

export const WithDescription = {
  args: {
    label: "",
    description: "This is a text field",
    placeholder: "Number field...",
    isRequired: false,
    isDisabled: false,
  },
};

export const Required = {
  args: {
    label: "Number Field",
    description: "",
    placeholder: "Number field...",
    isRequired: true,
    isDisabled: false,
  },
};

export const Disabled = {
  args: {
    label: "",
    description: "",
    placeholder: "Number field...",
    isRequired: false,
    isDisabled: true,
  },
};

type SkeletonStory = StoryObj<typeof NumberField.Skeleton>;

export const Skeleton: SkeletonStory = {
  render: (props) => <NumberField.Skeleton {...props} />,
  args: {
    label: true,
    description: true,
  },
};
