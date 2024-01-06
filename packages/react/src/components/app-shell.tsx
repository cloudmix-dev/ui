import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { Fragment, forwardRef, useState } from "react";

import { cn } from "../utils";
import { Button } from "./button";
import { Slot } from "./slot";

export interface AppShellProps extends React.PropsWithChildren {
  renderActions?: React.ReactNode;
  renderBar?: React.ReactNode;
  renderFooter?: React.ReactNode;
  renderLogo?: React.ReactNode;
  renderNav?: React.ReactNode;
}

function AppShell({
  children,
  renderActions,
  renderBar,
  renderFooter,
  renderLogo,
  renderNav,
}: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const hasNav = Boolean(renderNav || renderFooter);
  const hasBar = Boolean(renderBar || renderActions);

  return (
    <div className="relative h-full w-full">
      {hasNav && (
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-neutral-950/75" />
            </Transition.Child>
            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="dark absolute left-full top-0 flex w-16 justify-center pt-5">
                      <Button
                        className="-m-2.5 p-2.5"
                        variant="ghost"
                        size="icon"
                        onPress={() => setSidebarOpen(false)}
                        aria-label="Close sidebar"
                      >
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-col gap-y-5 w-full overflow-y-auto bg-neutral-100 p-4 dark:bg-neutral-900">
                    {renderLogo && (
                      <div className="flex-shrink-0 py-4">{renderLogo}</div>
                    )}
                    <nav className="flex-grow flex flex-col space-y-1">
                      {renderNav}
                    </nav>
                    {renderFooter && (
                      <div className="flex-shrink-0 flex flex-col space-y-1">
                        {renderFooter}
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      )}
      {hasNav && (
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex flex-col gap-y-5 h-full overflow-y-auto bg-neutral-100 p-4 dark:bg-neutral-900">
            {renderLogo && (
              <div className="flex-shrink-0 py-4">{renderLogo}</div>
            )}
            <nav className="flex-grow flex flex-col space-y-1">{renderNav}</nav>
            {renderFooter && (
              <div className="flex-shrink-0 flex flex-col space-y-1">
                {renderFooter}
              </div>
            )}
          </div>
        </div>
      )}
      <div
        className={cn("fixed top-0 left-0 w-full z-40", hasNav && "lg:pl-72")}
      >
        <div className="flex h-16 items-center gap-x-4 border-b border-neutral-200 bg-neutral-50 text-neutral-950 px-4 dark:bg-neutral-950 dark:text-neutral-50 dark:border-neutral-800">
          {hasNav && (
            <button
              type="button"
              className="-m-2.5 p-2.5 text-neutral-950 lg:hidden dark:text-neutral-50"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          )}
          {hasBar && (
            <div className="flex flex-1 gap-x-4 self-stretch">
              <div className="flex-grow flex items-center gap-x-4">
                {renderBar}
              </div>
              {renderActions && (
                <div className="flex items-center gap-x-4 pl-4 border-l border-neutral-200 dark:border-neutral-800">
                  {renderActions}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={cn("flex flex-col h-full", hasNav && "lg:pl-72")}>
        <main className="flex-grow pt-16">{children}</main>
        <footer>
          <div className="container m-auto px-4">
            <div className="flex justify-center items-center h-16 text-sm">
              <p>&copy; {new Date().getFullYear()} Cloudmix</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

AppShell.displayName = "AppShell";

export interface AppShellNavigationLinkProps extends React.PropsWithChildren {
  active?: boolean;
  asChild?: boolean;
  className?: string;
  href: string;
  hrefProp?: "href" | "to";
}

const AppShellNavigationLink = forwardRef<
  HTMLAnchorElement,
  AppShellNavigationLinkProps
>(
  (
    { active = false, asChild, children, className, ...props },
    forwardedRef,
  ) => {
    const Component = asChild ? Slot : "a";

    return (
      <Component
      // biome-ignore lint/suspicious/noExplicitAny: the forwardedRef can be for any React component
      ref={forwardedRef as any}
        className={cn(
          "group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500 focus-visible:ring-offset-neutral-100 dark:focus-visible:ring-offset-neutral-900",
          active
            ? "bg-neutral-200 text-brand-600 dark:bg-neutral-800 dark:text-brand-500"
            : "text-neutral-500 hover:text-neutral-950 hover:bg-neutral-200 dark:text-neutral-400 dark:hover:text-neutral-50 dark:hover:bg-neutral-800",
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

AppShell.NavigationLink = AppShellNavigationLink;

AppShell.NavigationLink.displayName = "AppShell.NavigationLink";

export { AppShell };
