import { slugifyWithCounter } from "@sindresorhus/slugify";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "../utils";
import { Prose } from "./prose";

interface TOCNode {
  id: string;
  children: TOCNode[];
  type: `h${number}`;
  title: string;
}

function collectHeadings(nodes: TOCNode[], slugify = slugifyWithCounter()) {
  const sections: TOCNode[] = [];

  for (const node of nodes) {
    const id = node.id || slugify(node.title);

    if (node.type === "h3" && sections[sections.length - 1]) {
      // biome-ignore lint/style/noNonNullAssertion: we know it exists
      sections[sections.length - 1]!.children?.push({ ...node, id });
    } else {
      sections.push({ ...node, id, children: [] });
    }
  }

  return sections;
}

interface TableOfContentsInnerProps {
  scrollContainer: HTMLElement | null;
  scrollOffset?: number;
  tableOfContents: TOCNode[];
}

function TableOfContentsInner({
  scrollContainer,
  scrollOffset = 64, // 4rem (16 * 4)
  tableOfContents,
}: TableOfContentsInnerProps) {
  const [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id);
  const getHeadings = useCallback((tableOfContents: TOCNode[]) => {
    return tableOfContents
      .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
      .map((id) => {
        const el = document.getElementById(id as string);

        if (!el) {
          return;
        }

        const style = window.getComputedStyle(el as HTMLElement);
        const scrollMt = parseFloat(style.scrollMarginTop);
        const top =
          window.scrollY +
          (el as HTMLElement).getBoundingClientRect().top -
          scrollMt;

        return { id, top };
      })
      .filter((node) => Boolean(node)) as { id: string; top: number }[];
  }, []);

  useEffect(() => {
    if (scrollContainer) {
      if (tableOfContents.length === 0) {
        return;
      }

      const headings = getHeadings(tableOfContents);

      function onScroll() {
        const top = scrollContainer?.scrollTop ?? 0;
        let current = headings[0]?.id;

        for (const heading of headings) {
          if (top >= heading.top - scrollOffset) {
            current = heading.id;
          } else {
            break;
          }
        }

        setCurrentSection(current);
      }

      scrollContainer.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      return () => {
        scrollContainer.removeEventListener("scroll", onScroll);
      };
    }
  }, [scrollContainer, getHeadings, tableOfContents, scrollOffset]);

  function isActive(section: TOCNode) {
    if (section.id === currentSection) {
      return true;
    }

    if (!section.children) {
      return false;
    }

    return section.children.findIndex(isActive) > -1;
  }

  return (
    <>
      {tableOfContents.length > 0 ? (
        <>
          <h2
            id="on-this-page-title"
            className="text-sm font-medium text-neutral-950 dark:text-neutral-50"
          >
            On this page
          </h2>
          <ol className="mt-4 space-y-3 text-sm">
            {tableOfContents.map((section) => (
              <li key={section.id}>
                <h3>
                  <a
                    href={`#${section.id}`}
                    className={cn(
                      isActive(section)
                        ? "text-brand-500"
                        : "font-normal text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300",
                    )}
                  >
                    {section.title}
                  </a>
                </h3>
                {section.children.length > 0 && (
                  <ol className="mt-2 space-y-3 pl-5 text-neutral-500 dark:text-neutral-400">
                    {section.children.map((subSection) => (
                      <li key={subSection.id}>
                        <a
                          href={`#${subSection.id}`}
                          className={
                            isActive(subSection)
                              ? "text-brand-500"
                              : "hover:text-neutral-600 dark:hover:text-neutral-300"
                          }
                        >
                          {subSection.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
          </ol>
        </>
      ) : (
        <div className="flex flex-col space-y-6">
          <div className="w-3/4">
            <Prose.Skeleton lines={1} />
          </div>
          <Prose.Skeleton lines={4} />
        </div>
      )}
    </>
  );
}

export interface TableOfContentsProps {
  className?: string;
  contentQuerySelector?: string;
  maxHeading?: number;
  minHeading?: number;
  scrollOffset?: number;
  scrollQuerySelector?: string;
}

function TableOfContents({
  className,
  contentQuerySelector = "article",
  maxHeading = 3,
  minHeading = 2,
  scrollOffset,
  scrollQuerySelector = contentQuerySelector,
}: TableOfContentsProps) {
  const el = useRef<HTMLElement | null>(null);
  const [sections, setSections] = useState<TOCNode[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const contentNodeEl = document.querySelector(contentQuerySelector);

      el.current = scrollQuerySelector
        ? document.querySelector(scrollQuerySelector)
        : (contentNodeEl as HTMLElement);

      const nodeEls = contentNodeEl?.querySelectorAll(
        new Array(maxHeading - minHeading + 1)
          .fill(0)
          .map((_, i) => `h${i + minHeading}`)
          .join(", "),
      );
      const nodes: TOCNode[] = [];

      for (const el of nodeEls ?? []) {
        const type = el.tagName.toLowerCase() as `h${number}`;
        const title = el.textContent ?? "";

        nodes.push({ type, title, id: el.id ?? "", children: [] });
      }

      setSections(collectHeadings(nodes));
    }
  }, [contentQuerySelector, maxHeading, minHeading, scrollQuerySelector]);

  return (
    <nav
      aria-labelledby="on-this-page-title"
      className={cn(
        "w-full max-w-[14rem] p-4 rounded-lg border border-neutral-200 dark:border-neutral-800",
        className,
      )}
    >
      <TableOfContentsInner
        tableOfContents={sections}
        scrollContainer={el.current}
        scrollOffset={scrollOffset}
      />
    </nav>
  );
}

TableOfContents.displayName = "TableOfContents";

export { TableOfContents };
