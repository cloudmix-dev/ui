import { Checkbox } from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
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
    label: "This is a checkbox",
    isRequired: false,
    isDisabled: false,
  },
};

export const Required = {
  args: {
    label: "This is a checkbox",
    isRequired: true,
    isDisabled: false,
  },
};

export const Disabled = {
  args: {
    label: "This is a checkbox",
    isRequired: false,
    isDisabled: true,
  },
};

type CheckboxGroupStory = StoryObj<typeof Checkbox.Group>;

export const Group: CheckboxGroupStory = {
  render: (props) => (
    <Checkbox.Group {...props}>
      <Checkbox value="1" label="Item 1" />
      <Checkbox value="2" label="Item 2" />
      <Checkbox value="3" label="Item 3" />
    </Checkbox.Group>
  ),
  args: {
    label: "This is a checkbox group",
    isRequired: false,
    isDisabled: false,
  },
};
