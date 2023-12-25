import { slugifyWithCounter } from "@sindresorhus/slugify";
import cn from "classnames";
import { useCallback, useEffect, useState } from "react";

interface TOCNode {
  id: string;
  children: TOCNode[];
  type: "h2" | "h3";
  title: string;
}

function collectHeadings(nodes: TOCNode[], slugify = slugifyWithCounter()) {
  const sections: TOCNode[] = [];

  for (const node of nodes) {
    const id = slugify(node.title);

    if (node.type === "h3" && sections[sections.length - 1]) {
      // biome-ignore lint/style/noNonNullAssertion: we know it exists
      sections[sections.length - 1]!.children?.push({ ...node, id });
    } else {
      sections.push({ ...node, id, children: [] });
    }
  }

  return sections;
}

function TableOfContentsInner({
  tableOfContents,
}: { tableOfContents: TOCNode[] }) {
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
    if (tableOfContents.length === 0) {
      return;
    }

    const headings = getHeadings(tableOfContents);

    function onScroll() {
      const top = window.scrollY;
      let current = headings[0]?.id;

      for (const heading of headings) {
        if (top >= heading.top) {
          current = heading.id;
        } else {
          break;
        }
      }

      setCurrentSection(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [getHeadings, tableOfContents]);

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
    <nav aria-labelledby="on-this-page-title" className="w-56">
      {tableOfContents.length > 0 && (
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
      )}
    </nav>
  );
}

export interface TableOfContentsProps {
  querySelector?: string;
}

function TableOfContents({ querySelector = "article" }: TableOfContentsProps) {
  const [sections, setSections] = useState<TOCNode[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const contentNodeEl = document.querySelector(querySelector);
      const nodeEls = contentNodeEl?.querySelectorAll("h2, h3");
      const nodes: TOCNode[] = [];

      for (const el of nodeEls ?? []) {
        const type = el.tagName.toLowerCase() as "h2" | "h3";
        const title = el.textContent ?? "";

        nodes.push({ type, title, id: "", children: [] });
      }

      setSections(collectHeadings(nodes));
    }
  }, [querySelector]);

  return <TableOfContentsInner tableOfContents={sections} />;
}

TableOfContents.displayName = "TableOfContents";

export { TableOfContents };
