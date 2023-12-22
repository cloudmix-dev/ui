// @ts-ignore
export function StoryLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex justify-center items-center h-full w-full p-8 bg-neutral-50 dark:bg-neutral-950">
      {children}
    </div>
  );
}
