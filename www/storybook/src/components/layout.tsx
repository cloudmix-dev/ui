// @ts-ignore
export function StoryLayout({
  children,
  padding = true,
}: React.PropsWithChildren<{ padding?: boolean }>) {
  return (
    <div
      className={`flex justify-center items-center h-full w-full bg-neutral-50 dark:bg-neutral-950${
        padding ? " p-8" : ""
      }`}
    >
      {children}
    </div>
  );
}
