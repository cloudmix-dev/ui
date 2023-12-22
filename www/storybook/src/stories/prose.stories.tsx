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
  render: () => (
    <Prose>
      <Prose.P>This is a paragraph.</Prose.P>
    </Prose>
  ),
};

export const Strong: ProseStory = {
  render: () => (
    <Prose>
      <Prose.Strong>This is strong.</Prose.Strong>
    </Prose>
  ),
};

export const Emphasis: ProseStory = {
  render: () => (
    <Prose>
      <Prose.Em>This is emphasised.</Prose.Em>
    </Prose>
  ),
};

export const Heading1: ProseStory = {
  render: () => (
    <Prose>
      <Prose.H1>This is a level 1 heading.</Prose.H1>
    </Prose>
  ),
};

export const Heading2: ProseStory = {
  render: () => (
    <Prose>
      <Prose.H2>This is a level 2 heading.</Prose.H2>
    </Prose>
  ),
};

export const Heading3: ProseStory = {
  render: () => (
    <Prose>
      <Prose.H3>This is a level 3 heading.</Prose.H3>
    </Prose>
  ),
};

export const Heading4: ProseStory = {
  render: () => (
    <Prose>
      <Prose.H4>This is a level 4 heading.</Prose.H4>
    </Prose>
  ),
};

export const UnorderedList: ProseStory = {
  render: () => (
    <Prose>
      <Prose.UL>
        <Prose.LI>List item 1</Prose.LI>
        <Prose.LI>List item 2</Prose.LI>
        <Prose.LI>List item 3</Prose.LI>
      </Prose.UL>
    </Prose>
  ),
};

export const OrderedList: ProseStory = {
  render: () => (
    <Prose>
      <Prose.OL>
        <Prose.LI>List item 1</Prose.LI>
        <Prose.LI>List item 2</Prose.LI>
        <Prose.LI>List item 3</Prose.LI>
      </Prose.OL>
    </Prose>
  ),
};

export const Blockquote: ProseStory = {
  render: () => (
    <Prose>
      <Prose.Blockquote>This is a block quote.</Prose.Blockquote>
    </Prose>
  ),
};
export const Small: ProseStory = {
  render: () => (
    <Prose size="sm">
      <Prose.P>This is a paragraph.</Prose.P>
    </Prose>
  ),
};

export const Large: ProseStory = {
  render: () => (
    <Prose size="lg">
      <Prose.P>This is a paragraph.</Prose.P>
    </Prose>
  ),
};

export const ExtraLarge: ProseStory = {
  render: () => (
    <Prose size="xl">
      <Prose.P>This is a paragraph.</Prose.P>
    </Prose>
  ),
};

export const ExtraExtraLarge: ProseStory = {
  render: () => (
    <Prose size="2xl">
      <Prose.P>This is a paragraph.</Prose.P>
    </Prose>
  ),
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
