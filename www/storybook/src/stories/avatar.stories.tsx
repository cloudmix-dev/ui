import { Avatar } from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
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
    alt: "John Doe",
    indicator: "",
    size: "default",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};

export const WithIndicator = {
  args: {
    alt: "John Doe",
    indicator: "neutral",
    size: "default",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};

export const Small = {
  args: {
    alt: "John Doe",
    indicator: "",
    size: "sm",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};

export const Large = {
  args: {
    alt: "John Doe",
    indicator: "",
    size: "lg",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};

export const ExtraLarge = {
  args: {
    alt: "John Doe",
    indicator: "",
    size: "xl",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};

type AvatarGroupStory = StoryObj<typeof Avatar.Group>;

export const Group: AvatarGroupStory = {
  render: (props) => (
    <Avatar.Group {...props}>
      <Avatar
        alt="John Doe"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="ring-2 ring-neutral-50 dark:ring-neutral-900"
      />
      <Avatar
        alt="John Doe"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="ring-2 ring-neutral-50 dark:ring-neutral-900"
      />
      <Avatar
        alt="John Doe"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="ring-2 ring-neutral-50 dark:ring-neutral-900"
      />
    </Avatar.Group>
  ),
};

type SkeletonStory = StoryObj<typeof Avatar.Skeleton>;

export const Skeleton: SkeletonStory = {
  render: (props) => <Avatar.Skeleton {...props} />,
  args: {
    size: "default",
  },
};
