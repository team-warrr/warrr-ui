import type { Meta, StoryObj } from "@storybook/react";

import Divider from "../src/divider";

const meta = {
  title: "UI/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "콘텐츠 섹션을 시각적으로 구분할 때 사용합니다. 레이아웃의 구조를 명확히 하며, 사용자의 정보 탐색을 돕습니다. 선택적으로 텍스트를 포함할 수 있어 콘텐츠 간의 관계나 주제 전환을 나타낼 수 있습니다.",
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
      height: "100px",
      backgroundColor: "black",
    },
  },
};
