import { Prose } from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof Prose> = {
  title: "Components/Prose",
  component: Prose,
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

type ProseStory = StoryObj<typeof Prose>;

export const Paragraph: ProseStory = {
  render: (props) => (
    <Prose>
      <Prose.P {...props} />
    </Prose>
  ),
  args: {
    children: "This is a paragraph.",
  },
};

export const Strong: ProseStory = {
  render: (props) => (
    <Prose>
      <Prose.Strong {...props} />
    </Prose>
  ),
  args: {
    children: "This is strong.",
  },
};

export const Emphasis: ProseStory = {
  render: (props) => (
    <Prose>
      <Prose.Em {...props} />
    </Prose>
  ),
  args: {
    children: "This is emphasised.",
  },
};

export const Heading1: ProseStory = {
  render: (props) => (
    <Prose>
      <Prose.H1 {...props} />
    </Prose>
  ),
  args: {
    children: "This is a level 1 heading.",
  },
};

export const Heading2: ProseStory = {
  render: (props) => (
    <Prose>
      <Prose.H2 {...props} />
    </Prose>
  ),
  args: {
    children: "This is a level 2 heading.",
  },
};

export const Heading3: ProseStory = {
  render: (props) => (
    <Prose>
      <Prose.H3 {...props} />
    </Prose>
  ),
  args: {
    children: "This is a level 3 heading.",
  },
};

export const Heading4: ProseStory = {
  render: (props) => (
    <Prose>
      <Prose.H4 {...props} />
    </Prose>
  ),
  args: {
    children: "This is a level 4 heading.",
  },
};

export const UnorderedList: ProseStory = {
  render: (props) => (
    <Prose>
      <Prose.UL {...props}>
        <Prose.LI>List item 1</Prose.LI>
        <Prose.LI>List item 2</Prose.LI>
        <Prose.LI>List item 3</Prose.LI>
      </Prose.UL>
    </Prose>
  ),
  args: {},
};

export const OrderedList: ProseStory = {
  render: (props) => (
    <Prose>
      <Prose.OL {...props}>
        <Prose.LI>List item 1</Prose.LI>
        <Prose.LI>List item 2</Prose.LI>
        <Prose.LI>List item 3</Prose.LI>
      </Prose.OL>
    </Prose>
  ),
  args: {},
};

export const Blockquote: ProseStory = {
  render: (props) => (
    <Prose>
      <Prose.Blockquote {...props} />
    </Prose>
  ),

  args: {
    children: "This is a block quote.",
  },
};

export const Small: ProseStory = {
  render: (props) => (
    <Prose size="sm">
      <Prose.P {...props} />
    </Prose>
  ),
  args: {
    children: "This is a paragraph.",
  },
};

export const Large: ProseStory = {
  render: (props) => (
    <Prose size="lg">
      <Prose.P {...props} />
    </Prose>
  ),
  args: {
    children: "This is a paragraph.",
  },
};

export const ExtraLarge: ProseStory = {
  render: (props) => (
    <Prose size="xl">
      <Prose.P {...props} />
    </Prose>
  ),
  args: {
    children: "This is a paragraph.",
  },
};

export const ExtraExtraLarge: ProseStory = {
  render: (props) => (
    <Prose size="2xl">
      <Prose.P {...props} />
    </Prose>
  ),
  args: {
    children: "This is a paragraph.",
  },
};

type ProseSkeletonStory = StoryObj<typeof Prose.Skeleton>;

export const Skeleton: ProseSkeletonStory = {
  render: (props) => (
    <div className="w-96">
      <Prose.Skeleton {...props} />
    </div>
  ),
  args: {
    size: "default",
    lines: 2,
  },
};
