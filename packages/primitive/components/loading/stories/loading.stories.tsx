import type { Meta, StoryObj } from "@storybook/react";

import Loading from "../src/loading";

const meta = {
  title: "UI/Loading",
  component: Loading,
  tags: ["autodocs"],
  parameters: {
    // 컴포넌트 부제목 작성 ex. 버튼 컴포넌트
    componentSubtitle: "",
  },
  argTypes: {
    props1: {
      description: "",
      control: {
        // text, number, boolean, color, check, radio 등 존재
        // control 불가능하게 하고 싶을 경우 false로 설정
        // ex. control: false,
        // 참고 : https://storybook.js.org/docs/react/essentials/controls
        type: "select",
      },
      options: ["option1", "option2"],
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
