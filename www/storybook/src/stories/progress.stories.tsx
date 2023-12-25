import { Progress } from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
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

type ProgressStory = StoryObj<typeof Progress>;

export const Default: ProgressStory = {
  render: (props) => (
    <div className="w-96">
      <Progress {...props} />
    </div>
  ),
  args: {
    label: "Progress",
    value: 50,
  },
};
