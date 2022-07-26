import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from "./Button";

type Component = typeof Button;
type Meta = ComponentMeta<Component>;
type Story = ComponentStoryObj<Component>;

const meta: Meta = {
  component: Button,
  args: {
    label: "boop",
  },
};

export default meta;

export const Primary: Story = {};
