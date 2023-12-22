import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
} from "@cloudmix-dev/react";
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
      <DropdownButton>Dropdown</DropdownButton>
      <DropdownMenu>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
        <DropdownMenuItem>Item 3</DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  ),
};
