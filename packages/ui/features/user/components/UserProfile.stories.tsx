import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { UserProfile } from "./UserProfile";

type Component = typeof UserProfile;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  title: "features/user/userprofile",
  component: UserProfile,
  args: {
    user: {
      avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
      name: "Remy Sharp",
      resourcePath: "rreemmyy",
    },
  },
};

export default meta;

export const Default: Story = {};
