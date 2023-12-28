import { Button } from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
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
    variant: "secondary",
    children: "Default button",
    size: "default",
  },
};

export const Primary = {
  args: {
    variant: "primary",
    size: "default",
    children: "Primary button",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    size: "default",
    children: "Secondary button",
  },
};

export const Brand = {
  args: {
    variant: "brand",
    size: "default",
    children: "Brand button",
  },
};

export const Danger = {
  args: {
    variant: "danger",
    size: "default",
    children: "Danger button",
  },
};

export const Outline = {
  args: {
    variant: "outline",
    size: "default",
    children: "Outline button",
  },
};

export const Ghost = {
  args: {
    variant: "ghost",
    size: "default",
    children: "Ghost button",
  },
};

export const Link = {
  args: {
    variant: "link",
    size: "default",
    children: "Link button",
  },
};

export const Small = {
  args: {
    variant: "secondary",
    size: "sm",
    children: "Small button",
  },
};

export const Large = {
  args: {
    variant: "secondary",
    size: "lg",
    children: "Large button",
  },
};

type SkeletonStory = StoryObj<typeof Button.Skeleton>;

export const Skeleton: SkeletonStory = {
  render: (props) => <Button.Skeleton {...props} />,
  args: {
    size: "default",
  },
};
