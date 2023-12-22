import {
  type Key,
  Menu,
  MenuItem,
  type MenuItemProps,
  type MenuProps,
  MenuTrigger,
  type MenuTriggerProps,
  Popover,
} from "react-aria-components";

import { Button, type ButtonProps } from "./button";

export type DropdownProps = MenuTriggerProps;

export function Dropdown({
  children,
  ...props
}: React.PropsWithChildren<DropdownProps>) {
  return <MenuTrigger {...props}>{children}</MenuTrigger>;
}

// biome-ignore lint/suspicious/noExplicitAny: the underlying component is typed as any
export type DropdownMenuProps = MenuProps<any>;

export function DropdownMenu({
  children,
  ...props
}: React.PropsWithChildren<DropdownMenuProps>) {
  return (
    <Popover className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
      <Menu
        className="z-50 min-w-[8rem] overflow-hidden rounded-md bg-neutral-100 border border-neutral-200 p-1 text-neutral-950 shadow-md dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-50"
        {...props}
      >
        {children}
      </Menu>
    </Popover>
  );
}

export type DropdownButtonProps = ButtonProps;

export function DropdownButton(props: DropdownButtonProps) {
  return <Button {...props} />;
}

export type DropdownMenuItemProps = MenuItemProps;

export function DropdownMenuItem({
  children,
  ...props
}: React.PropsWithChildren<DropdownMenuItemProps>) {
  return (
    <MenuItem
      {...props}
      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-neutral-200 focus:text-brand-600 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-brand-500"
    >
      {children}
    </MenuItem>
  );
}

export type DropdownMenuItemKey = Key;
