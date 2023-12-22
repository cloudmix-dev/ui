import {
  ClipboardDocumentCheckIcon,
  ClipboardIcon,
} from "@heroicons/react/24/solid";
import cn from "classnames";
import { Highlight, Prism } from "prism-react-renderer";
import { Fragment, useState } from "react";

// This is horrible, but Prism sucks:
// https://www.npmjs.com/package/prism-react-renderer#custom-language-support
globalThis.Prism = Prism;

import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";

export interface CodeProps {
  content: string;
  copy?: boolean;
  fileExplorer?: boolean;
  language: string;
  numbers?: boolean;
}

function Code({ content, copy, fileExplorer, language, numbers }: CodeProps) {
  const [copying, setCopying] = useState(false);
  const onCopy = async () => {
    if (copying) {
      return;
    }

    setCopying(true);

    try {
      await navigator.clipboard.writeText(content.trimEnd());
    } catch (_) {
      setCopying(false);
    }

    setTimeout(() => {
      setCopying(false);
    }, 1500);
  };

  return (
    <div className="relative p-4 bg-neutral-900 rounded-lg font-mono ring-1 ring-neutral-700">
      <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-brand-300/0 via-brand-300/70 to-brand-300/0 dark:from-brand-700/0 dark:via-brand-700/50 dark:to-brand-700/0" />
      <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-brand-400/0 via-brand-400 to-brand-400/0 dark:from-brand-600/0 dark:via-brand-600/70 dark:to-brand-600/0" />
      {fileExplorer && (
        <div className="pb-3 border-b border-b-neutral-700">
          <svg
            aria-hidden="true"
            viewBox="0 0 42 10"
            fill="none"
            className="h-2.5 w-auto stroke-neutral-500/30"
          >
            <title>Traffic lights menu</title>
            <circle cx="5" cy="5" r="4.5" fill="#ef4444" />
            <circle cx="21" cy="5" r="4.5" fill="#fbbf24" />
            <circle cx="37" cy="5" r="4.5" fill="#22c55e" />
          </svg>
        </div>
      )}
      <div className="flex items-start text-sm">
        {numbers && (
          <div
            aria-hidden="true"
            className={cn(
              "flex-shrink-0 select-none border-r border-neutral-700 mr-4 pr-4 text-neutral-600",
              fileExplorer && "pt-2",
            )}
          >
            {Array.from({
              length: content.split("\n").length,
            }).map((_, index) => (
              <Fragment key={`line_number_${index}`}>
                {(index + 1).toString().padStart(2, "0")}
                <br />
              </Fragment>
            ))}
          </div>
        )}
        <div className={cn("flex-grow", fileExplorer && "pt-2")}>
          <Highlight
            code={content.trimEnd()}
            language={language}
            theme={{
              plain: {},
              styles: [],
            }}
          >
            {({ className, style, tokens, getTokenProps }) => (
              <pre className={className} style={style}>
                <code>
                  {tokens.map((line, lineIndex) => (
                    <Fragment key={`line_${lineIndex}`}>
                      {line
                        .filter((token) => !token.empty)
                        .map((token, tokenIndex) => (
                          <span
                            key={`token_${tokenIndex}`}
                            {...getTokenProps({ token })}
                          />
                        ))}
                      {"\n"}
                    </Fragment>
                  ))}
                </code>
              </pre>
            )}
          </Highlight>
        </div>
        {copy && (
          <div className={cn("flex-shrink-0 ml-4", fileExplorer && "pt-2")}>
            <button
              type="button"
              className="h-7 w-7 p-1.5 text-neutral-100 rounded-md hover:bg-neutral-700"
              onClick={onCopy}
            >
              {copying ? (
                <ClipboardDocumentCheckIcon className="w-full h-full" />
              ) : (
                <ClipboardIcon className="w-full h-full" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

Code.displayName = "Code";

export { Code };
