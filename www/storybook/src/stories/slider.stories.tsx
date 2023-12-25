import { Slider } from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
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

type SliderStory = StoryObj<typeof Slider>;

export const Default: SliderStory = {
  render: (props) => (
    <div className="w-96">
      <Slider label="Slider" {...props} />
    </div>
  ),
  args: {},
};
