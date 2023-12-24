import { Radio } from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
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

type CheckboxStory = StoryObj<typeof Radio.Group>;

export const Default: CheckboxStory = {
  render: (props) => (
    <Radio.Group {...props}>
      <Radio value="1" label="Item 1" />
      <Radio value="2" label="Item 2" />
      <Radio value="3" label="Item 3" />
    </Radio.Group>
  ),
  args: {
    label: "This is a radio group",
    isRequired: false,
    isDisabled: false,
  },
};
