import { Tabs } from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
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

type TabsStory = StoryObj<typeof Tabs>;

export const Default: TabsStory = {
  render: (props) => (
    <Tabs {...props}>
      <Tabs.List>
        <Tabs.Button id="tab-1">Tab 1</Tabs.Button>
        <Tabs.Button id="tab-2">Tab 2</Tabs.Button>
        <Tabs.Button id="tab-3">Tab 3</Tabs.Button>
      </Tabs.List>
      <Tabs.Panel id="tab-1">Tab 1 content</Tabs.Panel>
      <Tabs.Panel id="tab-2">Tab 2 content</Tabs.Panel>
      <Tabs.Panel id="tab-3">Tab 3 content</Tabs.Panel>
    </Tabs>
  ),
  args: {},
};
