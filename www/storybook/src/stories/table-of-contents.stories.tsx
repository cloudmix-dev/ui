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
      <div id="scroll" className="flex-grow h-48 overflow-scroll">
        <article>
          <Prose>
            <section>
              <h1 id="heading-1">Heading 1</h1>
              <p>Some content underneath heading 1</p>
            </section>
            <hr />
            <section>
              <h2 id="heading-2">Heading 2</h2>
              <p>Some content underneath heading 2</p>
              <h3 id="heading-3">Heading 3</h3>
              <p>Some content underneath heading 3</p>
            </section>
            <hr />
            <section>
              <h2 id="heading-4">Heading 4</h2>
              <p>Some content underneath heading 4</p>
              <h3 id="heading-5">Heading 5</h3>
              <p>Some content underneath heading 5</p>
            </section>
          </Prose>
        </article>
      </div>
      <div className="relative flex-shrink-0 w-48">
        <div className="sticky top-0">
          <TableOfContents
            contentQuerySelector="article"
            scrollQuerySelector="#scroll"
            scrollOffset={64}
          />
        </div>
      </div>
    </div>
  ),
  args: {},
};
