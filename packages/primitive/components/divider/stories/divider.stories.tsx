import type { Meta, StoryObj } from "@storybook/react";

import Divider from "../src/divider";

const meta = {
  title: "UI/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Divider 컴포넌트",
  },
  argTypes: {
    orientation: {
      description: "Divider의 방향을 설정합니다.",
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: "horizontal",
    style: {
      width: "100%",
      height: "1px",
      backgroundColor: "black",
    },
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    style: {
      width: "1px",
      height: "100vh",
      backgroundColor: "black",
    },
  },
};
