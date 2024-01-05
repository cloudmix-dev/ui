import { ExcalidrawDiagram } from "@cloudmix-dev/react";

import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof ExcalidrawDiagram> = {
  title: "Components/ExcalidrawDiagram",
  component: ExcalidrawDiagram,
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

type ExcalidrawDiagramStory = StoryObj<typeof ExcalidrawDiagram>;

export const Default: ExcalidrawDiagramStory = {
  render: () => (
    <ExcalidrawDiagram
      mermaid={`
flowchart TD
  Start --> Stop`}
      viewMode
    />
  ),
};
