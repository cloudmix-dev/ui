import {
  AppShell,
  Avatar,
  Logo,
  Prose,
  TextField,
  ThemeSelector,
} from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

function Content() {
  return (
    <Prose className="m-auto">
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
        erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
        fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
        facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor
        neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat
        volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
        luctus, metus
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
        erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
        fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
        facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor
        neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat
        volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
        luctus, metus
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
        erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
        fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
        facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor
        neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat
        volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
        luctus, metus
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
        erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
        fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
        facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor
        neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat
        volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
        luctus, metus
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
        erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
        fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
        facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor
        neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat
        volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
        luctus, metus
      </p>
    </Prose>
  );
}

const meta: Meta<typeof AppShell> = {
  title: "Components/AppShell",
  component: AppShell,
  decorators: [
    (Story: React.ComponentType) => (
      <StoryLayout>
        <Story />
      </StoryLayout>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;

type AppShellStory = StoryObj<typeof AppShell>;

export const Default: AppShellStory = {
  render: (props) => (
    <div className="h-[50rem] w-full">
      <AppShell
        {...props}
        renderLogo={
          <a href="#home">
            <Logo text="Cloudmix" size="sm" />
          </a>
        }
        renderNav={
          <>
            <AppShell.NavigationLink href="#" active>
              Nav Link 1
            </AppShell.NavigationLink>
            <AppShell.NavigationLink href="#">
              Nav Link 2
            </AppShell.NavigationLink>
            <AppShell.NavigationLink href="#">
              Nav Link 3
            </AppShell.NavigationLink>
          </>
        }
        renderFooter={
          <>
            <AppShell.NavigationLink href="#">
              Footer Link 1
            </AppShell.NavigationLink>
            <AppShell.NavigationLink href="#">
              Footer Link 2
            </AppShell.NavigationLink>
          </>
        }
        renderBar={<TextField className="w-full" placeholder="Search..." />}
        renderActions={
          <>
            <Avatar
              alt="John Doe"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              size="lg"
            />
            <ThemeSelector />
          </>
        }
      >
        <Content />
      </AppShell>
    </div>
  ),
  args: {},
};

export const WithNavLinks: AppShellStory = {
  render: (props) => (
    <div className="h-[50rem] w-full">
      <AppShell
        {...props}
        renderLogo={
          <a href="#home">
            <Logo text="Cloudmix" size="sm" />
          </a>
        }
        renderNav={
          <>
            <AppShell.NavigationLink href="#" active>
              Nav Link 1
            </AppShell.NavigationLink>
            <AppShell.NavigationLink href="#">
              Nav Link 2
            </AppShell.NavigationLink>
            <AppShell.NavigationLink href="#">
              Nav Link 3
            </AppShell.NavigationLink>
          </>
        }
      >
        <Content />
      </AppShell>
    </div>
  ),
  args: {},
};

export const WithNavFooter: AppShellStory = {
  render: (props) => (
    <div className="h-[50rem] w-full">
      <AppShell
        {...props}
        renderLogo={
          <a href="#home">
            <Logo text="Cloudmix" size="sm" />
          </a>
        }
        renderFooter={
          <>
            <AppShell.NavigationLink href="#">
              Footer Link 1
            </AppShell.NavigationLink>
            <AppShell.NavigationLink href="#">
              Footer Link 2
            </AppShell.NavigationLink>
          </>
        }
      >
        <Content />
      </AppShell>
    </div>
  ),
  args: {},
};

export const WithBar: AppShellStory = {
  render: (props) => (
    <div className="h-[50rem] w-full">
      <AppShell
        {...props}
        renderBar={<TextField className="w-full" placeholder="Search..." />}
      >
        <Content />
      </AppShell>
    </div>
  ),
  args: {},
};

export const WithActions: AppShellStory = {
  render: (props) => (
    <div className="h-[50rem] w-full">
      <AppShell
        {...props}
        renderActions={
          <>
            <Avatar
              alt="John Doe"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              size="lg"
            />
            <ThemeSelector />
          </>
        }
      >
        <Content />
      </AppShell>
    </div>
  ),
  args: {},
};
