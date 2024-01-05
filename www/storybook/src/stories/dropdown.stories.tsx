import { Dropdown } from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
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

type DropdownStory = StoryObj<typeof Dropdown>;

export const Default: DropdownStory = {
  render: (props) => (
    <Dropdown {...props}>
      <Dropdown.Button>Dropdown</Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.MenuItem>Item 1</Dropdown.MenuItem>
        <Dropdown.MenuItem>Item 2</Dropdown.MenuItem>
        <Dropdown.MenuItem>Item 3</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  ),
  args: {},
};

type SkeletonStory = StoryObj<typeof Dropdown.Skeleton>;

export const Skeleton: SkeletonStory = {
  render: (props) => <Dropdown.Skeleton {...props} />,
  args: {},
};
