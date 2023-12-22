import { Logo } from "@cloudmix-dev/react";
import { type Meta } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
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
    text: "Cloudmix",
    footer: false,
    size: "default",
  },
};

export const WithFooter = {
  args: {
    text: "Cloudmix",
    footer: true,
    size: "default",
  },
};

export const Small = {
  args: {
    text: "Cloudmix",
    footer: false,
    size: "sm",
  },
};

export const Large = {
  args: {
    text: "Cloudmix",
    footer: false,
    size: "lg",
  },
};
