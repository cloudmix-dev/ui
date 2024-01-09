import {
  type Key,
  Menu,
  MenuItem,
  type MenuItemProps,
  type MenuProps,
  MenuTrigger,
  type MenuTriggerProps,
  Popover,
  Separator,
} from "react-aria-components";

import { Button, type ButtonProps } from "./button";

export type DropdownProps = MenuTriggerProps;

function Dropdown({ children, ...props }: DropdownProps) {
  return <MenuTrigger {...props}>{children}</MenuTrigger>;
}

Dropdown.displayName = "Dropdown";

// biome-ignore lint/suspicious/noExplicitAny: the underlying component is typed as any
export type DropdownMenuProps = MenuProps<any>;

Dropdown.Menu = function DropdownMenu({
  children,
  ...props
}: DropdownMenuProps) {
  return (
    <Popover className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
      <Menu
        className="z-50 min-w-[8rem] overflow-hidden rounded-lg bg-neutral-100 border border-neutral-200 p-1 text-neutral-950 shadow-md focus-visible:outline-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-50"
        {...props}
      >
        {children}
      </Menu>
    </Popover>
  );
};

// @ts-expect-error
Dropdown.Menu.displayName = "Dropdown.Menu";

export type DropdownButtonProps = ButtonProps;

Dropdown.Button = function DropdownButton(props: DropdownButtonProps) {
  return <Button {...props} />;
};

// @ts-expect-error
Dropdown.Button.displayName = "Dropdown.Button";

export type DropdownMenuItemProps = MenuItemProps;

Dropdown.MenuItem = function DropdownMenuItem({
  children,
  ...props
}: DropdownMenuItemProps) {
  return (
    <MenuItem
      {...props}
      className="relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-sm outline-none transition-colors focus:bg-neutral-200 focus:text-brand-600 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-brand-500"
    >
      {children}
    </MenuItem>
  );
};

// @ts-expect-error
Dropdown.MenuItem.displayName = "Dropdown.MenuItem";

Dropdown.Seperator = function DropdownSeparator() {
  return (
    <Separator className="border-b border-b-neutral-200 dark:border-b-neutral-800" />
  );
};

// @ts-expect-error
Dropdown.Seperator.displayName = "Dropdown.Seperator";

export type DropdownMenuItemKey = Key;

Dropdown.Skeleton = Button.Skeleton;

// @ts-expect-error
Dropdown.Skeleton.displayName = "Dropdown.Skeleton";

export { Dropdown };
