import {
  Excalidraw,
  THEME,
  convertToExcalidrawElements,
} from "@excalidraw/excalidraw";
import { parseMermaidToExcalidraw } from "@excalidraw/mermaid-to-excalidraw";

import { useEffect, useRef, useState } from "react";
import { cn } from "../utils";

export interface ExcalidrawDiagramProps {
  className?: string;
  mermaid?: string;
  viewMode?: boolean;
}

async function prepareDiagram(definition: string) {
  try {
    const { elements } = await parseMermaidToExcalidraw(definition, {
      fontSize: 16,
    });

    const excalidrawElements = convertToExcalidrawElements(elements);

    return excalidrawElements;
  } catch (_) {
    return [];
  }
}

function ExcalidrawDiagram({
  className,
  mermaid,
  viewMode = false,
}: ExcalidrawDiagramProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [theme, setTheme] = useState(
    document?.documentElement.classList.contains("dark")
      ? THEME.DARK
      : THEME.LIGHT,
  );
  // biome-ignore lint/suspicious/noExplicitAny: the type is not exported from the package
  const [elements, setElements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (mermaid) {
      setLoading(true);

      (async () => {
        const newElements = await prepareDiagram(mermaid);

        console.log("ELEMENTS", newElements);

        setElements(newElements);
        setLoading(false);
      })();
    }
  }, [mermaid]);

  useEffect(() => {
    if (window && "MutationObserver" in window) {
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.attributeName === "class") {
            // @ts-expect-error
            const newValue = mutation.target.getAttribute(
              mutation.attributeName,
            );

            if (newValue?.includes("dark")) {
              setTheme(THEME.DARK);
            } else {
              setTheme(THEME.LIGHT);
            }
          }
        }
      });

      observer.observe(document.documentElement, {
        attributes: true,
      });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "h-96 w-full border border-neutral-200 rounded-lg overflow-hidden dark:border-neutral-800",
        className,
      )}
    >
      {!loading && (
        <Excalidraw
          theme={theme}
          initialData={{
            elements,
            appState: {
              activeTool: {
                type: "hand",
                customType: null,
                locked: viewMode,
                lastActiveTool: null,
              },
              viewModeEnabled: viewMode,
              zenModeEnabled: false,
            },
            scrollToContent: true,
          }}
        />
      )}
    </div>
  );
}

ExcalidrawDiagram.displayName = "ExcalidrawDiagram";

export { ExcalidrawDiagram };
