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
    variant: "default",
  },
};

export const Info = {
  args: {
    title: "This is a callout",
    children: "This is the message for the callout.",
    variant: "info",
  },
};

export const Warning = {
  args: {
    title: "This is a callout",
    children: "This is the message for the callout.",
    variant: "warning",
  },
};

export const Danger = {
  args: {
    title: "This is a callout",
    children: "This is the message for the callout.",
    variant: "danger",
  },
};

export const WithIcon: CalloutStory = {
  render: (props) => (
    <Callout icon={<LightBulbIcon className="w-full" />} {...props} />
  ),
  args: {
    title: "This is a callout",
    children: "This is the message for the callout.",
    variant: "default",
  },
};
