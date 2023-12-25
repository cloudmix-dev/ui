import { Button, Toaster, useToast } from "@cloudmix-dev/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { StoryLayout } from "../components/layout";

const meta: Meta<typeof Toaster> = {
  title: "Components/Toasts",
  component: Toaster,
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

type ToasterStory = StoryObj<typeof Toaster>;

export const Default: ToasterStory = {
  render: (props) => {
    const { toast } = useToast();
    const onDefaultToast = () => {
      toast("This is a toast message.");
    };
    const onSuccessToast = () => {
      toast.success("This is a toast message.");
    };
    const onWarningToast = () => {
      toast.warning("This is a toast message.");
    };
    const onAsyncToast = () => {
      toast.promise(
        new Promise((resolve) => {
          setTimeout(resolve, 3000);
        }),
        {
          loading: "Loading...",
          success: "This is a toast message.",
          error: "Error!",
        },
      );
    };

    return (
      <div className="h-96">
        <div className="flex flex-col space-y-2">
          <Button onPress={onDefaultToast}>Default toast</Button>
          <Button onPress={onSuccessToast}>Success toast</Button>
          <Button onPress={onWarningToast}>Warning toast</Button>
          <Button onPress={onAsyncToast}>Async toast</Button>
        </div>
        <Toaster {...props} />
      </div>
    );
  },
  args: {},
};
