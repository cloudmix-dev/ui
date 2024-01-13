import {
  Panel,
  PanelGroup,
  type PanelGroupProps,
  type PanelProps,
  PanelResizeHandle,
  type PanelResizeHandleProps,
} from "react-resizable-panels";

import { cn } from "../utils";

export type ResizableProps = PanelGroupProps;

function Resizable({ className, ...props }: ResizableProps) {
  return (
    <PanelGroup
      className={cn(
        "flex h-full w-full panel-group-direction-vertical:flex-col",
        className,
      )}
      {...props}
    />
  );
}

Resizable.displayName = "Resizable";

export type ResizablePanelProps = PanelProps;

Resizable.Panel = function ResizablePanel(props: ResizablePanelProps) {
  return <Panel {...props} />;
};

// @ts-expect-error
Resizable.Panel.displayName = "Resizable.Panel";

export interface ResizableHandleProps extends PanelResizeHandleProps {
  withHandle?: boolean;
}

Resizable.Handle = function ResizableHandle({
  className,
  withHandle,
  ...props
}: ResizableHandleProps) {
  return (
    <PanelResizeHandle
      className={cn(
        "relative flex w-px items-center justify-center bg-neutral-100 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 hover:bg-brand-500 resize-handle-active-pointer:outline-none resize-handle-active-pointer:bg-brand-500 panel-group-direction-vertical:h-px panel-group-direction-vertical:w-full panel-group-direction-vertical:after:left-0 panel-group-direction-vertical:after:h-1 panel-group-direction-vertical:after:w-full panel-group-direction-vertical:after:-translate-y-1/2 panel-group-direction-vertical:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90 dark:bg-neutral-900",
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="grid grid-cols-2 h-4 w-3 rounded-sm bg-neutral-200 border-2 border-neutral-100 z-10 dark:bg-neutral-800 dark:border-neutral-900">
          <div className="flex justify-center items-center">
            <span className="rounded-full h-[2px] w-[2px] bg-neutral-300 dark:bg-neutral-700" />
          </div>
          <div className="flex justify-center items-center">
            <span className="rounded-full h-[2px] w-[2px] bg-neutral-300 dark:bg-neutral-700" />
          </div>
          <div className="flex justify-center items-center">
            <span className="rounded-full h-[2px] w-[2px] bg-neutral-300 dark:bg-neutral-700" />
          </div>
          <div className="flex justify-center items-center">
            <span className="rounded-full h-[2px] w-[2px] bg-neutral-300 dark:bg-neutral-700" />
          </div>
          <div className="flex justify-center items-center">
            <span className="rounded-full h-[2px] w-[2px] bg-neutral-300 dark:bg-neutral-700" />
          </div>
          <div className="flex justify-center items-center">
            <span className="rounded-full h-[2px] w-[2px] bg-neutral-300 dark:bg-neutral-700" />
          </div>
        </div>
      )}
    </PanelResizeHandle>
  );
};

// @ts-expect-error
Resizable.Handle.displayName = "Resizable.Handle";

export { Resizable };
