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

type DefaultStory = StoryObj<typeof Dropdown>;

export const Skeleton: DefaultStory = {
  render: () => (
    <Dropdown>
      <Dropdown.Button>Dropdown</Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.MenuItem>Item 1</Dropdown.MenuItem>
        <Dropdown.MenuItem>Item 2</Dropdown.MenuItem>
        <Dropdown.MenuItem>Item 3</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  ),
};
