import { Button } from "@cloudmix-dev/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    children: "Default button",
  },
};

export const Primary = {
  args: {
    variant: "primary",
    children: "Primary button",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    children: "Secondary button",
  },
};

export const Brand = {
  args: {
    variant: "brand",
    children: "Brand button",
  },
};

export const Danger = {
  args: {
    variant: "danger",
    children: "Danger button",
  },
};

export const Outline = {
  args: {
    variant: "outline",
    children: "Outline button",
  },
};

export const Ghost = {
  args: {
    variant: "ghost",
    children: "Ghost button",
  },
};

export const Link = {
  args: {
    variant: "link",
    children: "Link button",
  },
};

export const Small = {
  args: {
    size: "sm",
    children: "Small button",
  },
};

export const Large = {
  args: {
    size: "lg",
    children: "Large button",
  },
};
