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
      <p {...props} />
    </Prose>
  ),
  args: {
    children: "This is a paragraph.",
  },
};

export const Strong: ProseStory = {
  render: (props) => (
    <Prose>
      <strong {...props} />
    </Prose>
  ),
  args: {
    children: "This is strong.",
  },
};

export const Emphasis: ProseStory = {
  render: (props) => (
    <Prose>
      <em {...props} />
    </Prose>
  ),
  args: {
    children: "This is emphasised.",
  },
};

export const Heading1: ProseStory = {
  render: (props) => (
    <Prose>
      <h1 {...props} />
    </Prose>
  ),
  args: {
    children: "This is a level 1 heading.",
  },
};

export const Heading2: ProseStory = {
  render: (props) => (
    <Prose>
      <h2 {...props} />
    </Prose>
  ),
  args: {
    children: "This is a level 2 heading.",
  },
};

export const Heading3: ProseStory = {
  render: (props) => (
    <Prose>
      <h3 {...props} />
    </Prose>
  ),
  args: {
    children: "This is a level 3 heading.",
  },
};

export const Heading4: ProseStory = {
  render: (props) => (
    <Prose>
      <h4 {...props} />
    </Prose>
  ),
  args: {
    children: "This is a level 4 heading.",
  },
};

export const UnorderedList: ProseStory = {
  render: (props) => (
    <Prose>
      <ul {...props}>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
    </Prose>
  ),
  args: {},
};

export const OrderedList: ProseStory = {
  render: (props) => (
    <Prose>
      <ol {...props}>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ol>
    </Prose>
  ),
  args: {},
};

export const Blockquote: ProseStory = {
  render: (props) => (
    <Prose>
      <blockquote>
        <p {...props} />
      </blockquote>
    </Prose>
  ),

  args: {
    children: "This is a block quote.",
  },
};

export const Small: ProseStory = {
  render: (props) => (
    <Prose size="sm">
      <p {...props} />
    </Prose>
  ),
  args: {
    children: "This is a paragraph.",
  },
};

export const Large: ProseStory = {
  render: (props) => (
    <Prose size="lg">
      <p {...props} />
    </Prose>
  ),
  args: {
    children: "This is a paragraph.",
  },
};

export const ExtraLarge: ProseStory = {
  render: (props) => (
    <Prose size="xl">
      <p {...props} />
    </Prose>
  ),
  args: {
    children: "This is a paragraph.",
  },
};

export const ExtraExtraLarge: ProseStory = {
  render: (props) => (
    <Prose size="2xl">
      <p {...props} />
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
