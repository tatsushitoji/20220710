import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { mockUserProfile } from "mock";
import { UserProfile } from "./UserProfile";

type Component = typeof UserProfile;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  title: "features/user/userprofile",
  component: UserProfile,
  parameters: {
    msw: { handlers: [mockUserProfile] },
  },
};

export default meta;

export const Default: Story = {};
