import { Prose, TableOfContents } from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof TableOfContents> = {
  title: "Components/TableOfContents",
  component: TableOfContents,
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

type TableOfContentsStory = StoryObj<typeof TableOfContents>;

export const Default: TableOfContentsStory = {
  render: () => (
    <div className="flex w-full">
      <div className="flex-grow">
        <article>
          <Prose>
            <section>
              <h2>Heading 1</h2>
              <p>Some content underneath heading 1</p>
            </section>
            <hr />
            <section>
              <h2>Heading 2</h2>
              <p>Some content underneath heading 2</p>
              <h3>Heading 3</h3>
              <p>Some content underneath heading 3</p>
            </section>
            <hr />
            <section>
              <h2>Heading 4</h2>
              <p>Some content underneath heading 4</p>
              <h3>Heading 5</h3>
              <p>Some content underneath heading 5</p>
            </section>
          </Prose>
        </article>
      </div>
      <div className="flex-shrink-0 w-48">
        <TableOfContents />
      </div>
    </div>
  ),
  args: {},
};
