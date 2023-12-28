import { Prose, Resizable } from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof Resizable> = {
  title: "Components/Resizable",
  component: Resizable,
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

type ResizableStory = StoryObj<typeof Resizable>;

export const Default: ResizableStory = {
  render: (props) => (
    <div className="w-96 h-48">
      <Resizable
        {...props}
        className="h-full w-full rounded-lg bg-white text-neutral-950 dark:bg-black dark:text-neutral-50"
        direction="horizontal"
      >
        <Resizable.Panel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <Prose>
              <h2>Heading</h2>
            </Prose>
          </div>
        </Resizable.Panel>
        <Resizable.Handle />
        <Resizable.Panel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <Prose>
              <p>Content</p>
            </Prose>
          </div>
        </Resizable.Panel>
      </Resizable>
    </div>
  ),
  args: {},
};

export const Vertical: ResizableStory = {
  render: (props) => (
    <div className="w-96 h-48">
      <Resizable
        {...props}
        className="h-full w-full rounded-lg bg-white dark:bg-black"
        direction="vertical"
      >
        <Resizable.Panel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <Prose>
              <h2>Heading</h2>
            </Prose>
          </div>
        </Resizable.Panel>
        <Resizable.Handle />
        <Resizable.Panel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <Prose>
              <p>Content</p>
            </Prose>
          </div>
        </Resizable.Panel>
      </Resizable>
    </div>
  ),
  args: {},
};

export const WithHandle: ResizableStory = {
  render: (props) => (
    <div className="w-96 h-48">
      <Resizable
        {...props}
        className="h-full w-full rounded-lg bg-white border border-neutral-100 dark:bg-black dark:border-neutral-900"
        direction="horizontal"
      >
        <Resizable.Panel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <Prose>
              <h2>Heading</h2>
            </Prose>
          </div>
        </Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <Prose>
              <p>Content</p>
            </Prose>
          </div>
        </Resizable.Panel>
      </Resizable>
    </div>
  ),
  args: {},
};
