import { Callout } from "@cloudmix-dev/react";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof Callout> = {
  title: "Components/Callout",
  component: Callout,
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

type CalloutStory = StoryObj<typeof Callout>;

export const Default = {
  args: {
    title: "This is a callout",
    children: "This is the message for the callout.",
  },
};

export const WithIcon: CalloutStory = {
  render: () => (
    <Callout
      title="This is a callout"
      children="This is the message for the callout."
      icon={<LightBulbIcon className="w-full" />}
    />
  ),
};
