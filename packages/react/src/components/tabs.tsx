import {
  Tab as BaseTab,
  TabList as BaseTabList,
  type TabListProps,
  TabPanel as BaseTabPanel,
  type TabPanelProps as BaseTabPanelProps,
  type TabProps as BaseTabProps,
  Tabs as BaseTabs,
  type TabsProps as BaseTabsProps,
} from "react-aria-components";
import { cn } from "../utils";

export type TabsProps = BaseTabsProps;

function Tabs({ children, ...props }: TabsProps) {
  return <BaseTabs {...props}>{children}</BaseTabs>;
}

Tabs.displayName = "Tab";

// biome-ignore lint/suspicious/noExplicitAny: any is required for forwardRef
export type TabsListProps<T = any> = TabListProps<T>;

Tabs.List = function TabsList({
  children,
  className,
  ...props
}: TabsListProps) {
  return (
    <BaseTabList
      className={(...args) => {
        const classNameResult =
          typeof className === "function" ? className(...args) : className;

        return cn(
          "inline-flex h-10 items-center justify-center bg-neutral-200 text-neutral-500 rounded-md p-1 dark:bg-neutral-800 dark:text-neutral-400",
          classNameResult,
        );
      }}
      {...props}
    >
      {children}
    </BaseTabList>
  );
};

// @ts-expect-error
Tabs.List.displayName = "Tabs.List";

export type TabsButtonProps = BaseTabProps;

Tabs.Button = function TabsButton({
  children,
  className,
  ...props
}: TabsButtonProps) {
  return (
    <BaseTab
      className={(...args) => {
        const classNameResult =
          typeof className === "function" ? className(...args) : className;

        return cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-neutral-50 cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected=true]:bg-neutral-100 data-[selected=true]:text-neutral-950 data-[selected=true]:shadow-sm dark:ring-offset-neutral-950 dark:data-[selected=true]:bg-neutral-900 dark:data-[selected=true]:text-neutral-50",
          classNameResult,
        );
      }}
      {...props}
    >
      {children}
    </BaseTab>
  );
};

// @ts-expect-error
Tabs.Button.displayName = "Tabs.Button";

export type TabsPanelProps = BaseTabPanelProps;

Tabs.Panel = function TabsPanel({
  children,
  className,
  ...props
}: TabsPanelProps) {
  return (
    <BaseTabPanel
      className={(...args) => {
        const classNameResult =
          typeof className === "function" ? className(...args) : className;

        return cn(
          "mt-2 text-neutral-950 ring-offset-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-50 focus-visible:ring-offset-2 dark:text-neutral-50 dark:ring-offset-neutral-950",
          classNameResult,
        );
      }}
      {...props}
    >
      {children}
    </BaseTabPanel>
  );
};

// @ts-expect-error
Tabs.Panel.displayName = "Tabs.Panel";

export { Tabs };
