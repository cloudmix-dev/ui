import {
  AppShell,
  Avatar,
  Logo,
  TextField,
  ThemeSelector,
} from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

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
      />
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
      />
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
      />
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
      />
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
      />
    </div>
  ),
  args: {},
};
