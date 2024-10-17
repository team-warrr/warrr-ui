import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import Loading from "../src/loading";

const meta = {
  title: "UI/Loading",
  component: Loading,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "로딩 상태일 때 노출되는 fallback UI를 해당 컴포넌트로 감싸면 loading에 대한 웹 접근성을 챙길 수 있습니다.",
  },
  argTypes: {
    as: {
      description: "로딩 상태일 때 노출되는 fallback UI를 감싸는 HTML 엘리먼트를 지정합니다.",
      control: {
        type: "select",
      },
      options: ["div", "span", "p", "h1", "h2", "h3", "h4", "h5", "h6"],
      table: {
        type: {
          summary: "ElementType",
        },
        defaultValue: {
          summary: "div",
        },
      },
    },
    ref: {
      description: "로딩 상태일 때 노출되는 fallback UI를 감싸는 HTML 엘리먼트의 ref를 지정합니다.",
      control: false,
      table: {
        type: {
          summary: "RefObject<HTMLElement>",
        },
      },
    },
    children: {
      description: "로딩 상태일 때 노출되는 fallback UI를 지정합니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "ReactNode",
        },
        defaultValue: {
          summary: "로딩중입니다...",
        },
      },
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomComponent: Story = {
  args: {
    as: "button",
  },
};

export const CustomLoading: Story = {
  args: {
    children: (
      <>
        <style>
          {`
          @keyframes spinner-c7wet2 {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
        </style>
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background:
              "radial-gradient(farthest-side, #474bff 94%, #0000) top/9px 9px no-repeat, conic-gradient(#0000 30%, #474bff)",
            WebkitMask: "radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0)",
            animation: "spinner-c7wet2 1s infinite linear",
          }}
        />
      </>
    ),
  },
};
