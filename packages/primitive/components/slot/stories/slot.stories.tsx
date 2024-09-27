import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { Slottable } from "../src/components/slottable";
import { Slot } from "../src/slot";

const meta = {
  title: "UI/Slot",
  component: Slot,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "UI 요소를 유연하게 구성할 수 있는 컴포넌트",
  },
  argTypes: {
    children: {
      description: "슬롯 내부에 렌더링될 내용",
      control: false,
    },
  },
} satisfies Meta<typeof Slot>;

export default meta;
type Story = StoryObj<typeof meta>;

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp {...props} ref={ref} />;
});

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return <Comp {...props} ref={ref} />;
});

const ListItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement> & { asChild?: boolean }
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "li";
  return <Comp {...props} ref={ref} />;
});

const FormInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { asChild?: boolean }
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "input";
  return <Comp {...props} ref={ref} />;
});

export const ButtonComparison: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <div>
        <h3>Slot 없음</h3>
        <button
          onClick={() => alert("클릭되었습니다!")}
          style={{ padding: "10px", borderRadius: "5px" }}
        >
          클릭하세요
        </button>
      </div>

      <div>
        <h3>Slot 사용</h3>
        <Button
          asChild
          style={{ padding: "10px", borderRadius: "5px", background: "blue", color: "white" }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Slot 버튼이 클릭되었습니다!");
            }}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            클릭하세요 (버튼 스타일의 링크입니다)
          </a>
        </Button>
      </div>

      <div>
        <h3>Slottable 사용</h3>
        <Button
          onClick={() => alert("Slottable 버튼이 클릭되었습니다!")}
          style={{ padding: "10px", borderRadius: "5px" }}
        >
          클릭하세요
          <Slottable>
            <span style={{ marginLeft: "10px", color: "red" }}>🚀</span>
          </Slottable>
        </Button>
      </div>
    </div>
  ),
};

ButtonComparison.parameters = {
  docs: {
    description: {
      story: "Slot과 Slottable을 사용한 버튼 컴포넌트의 다양한 구현 방식을 비교합니다.",
    },
  },
};

export const CardComparison: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <div>
        <h3>Slot 없음</h3>
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
          <h3>카드 제목</h3>
          <p>이것은 카드 내용입니다.</p>
        </div>
      </div>

      <div>
        <h3>Slot 사용</h3>
        <Card
          asChild
          onClick={() => {
            alert("카드가 클릭되었습니다!");
          }}
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            background: "#f0f0f0",
            cursor: "pointer",
          }}
        >
          <button
            onClick={() => {
              alert("카드 버튼이 클릭되었습니다!");
            }}
            style={{
              width: "100%",
              textAlign: "left",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <h3>카드 제목 (버튼입니다)</h3>
            <p>
              이것은 카드 내용입니다. 클릭해보세요! (버튼의 스타일이 Slot 컴포넌트의 style을
              오버라이딩합니다)
            </p>
          </button>
        </Card>
      </div>

      <div>
        <h3>Slottable 사용</h3>
        <Card style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
          <h3>카드 제목</h3>
          <Slottable>
            <p style={{ color: "blue" }}>이것은 슬롯에 들어간 내용입니다.</p>
          </Slottable>
          <p>이것은 항상 렌더링되는 내용입니다.</p>
        </Card>
      </div>
    </div>
  ),
};

CardComparison.parameters = {
  docs: {
    description: {
      story: "Slot과 Slottable을 사용한 카드 컴포넌트의 다양한 구현 방식을 비교합니다.",
    },
  },
};

export const ListItemComparison: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>
        <h3>Slot 없음</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ padding: "10px", borderBottom: "1px solid #eee" }}>리스트 아이템 1</li>
        </ul>
      </div>

      <div>
        <h3>Slot 사용</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <ListItem
            asChild
            style={{ padding: "10px", borderBottom: "1px solid #eee", cursor: "pointer" }}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("리스트 아이템이 클릭되었습니다!");
              }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              리스트 아이템 1 (링크입니다)
            </a>
          </ListItem>
        </ul>
      </div>

      <div>
        <h3>Slottable 사용</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <ListItem style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
            리스트 아이템 1
            <Slottable>
              <span style={{ marginLeft: "10px", color: "green" }}>신규!</span>
            </Slottable>
          </ListItem>
        </ul>
      </div>
    </div>
  ),
};

ListItemComparison.parameters = {
  docs: {
    description: {
      story: "Slot과 Slottable을 사용한 리스트 아이템 컴포넌트의 다양한 구현 방식을 비교합니다.",
    },
  },
};

export const FormInputComparison: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <div>
        <h3>Slot 없음</h3>
        <input
          type="text"
          placeholder="텍스트를 입력하세요"
          style={{ padding: "10px", fontSize: "16px" }}
        />
      </div>

      <div>
        <h3>Slot 사용</h3>
        <FormInput
          asChild
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "2px solid blue",
            borderRadius: "5px",
          }}
        >
          <input type="text" placeholder="텍스트를 입력하세요 (커스텀 인풋입니다)" />
        </FormInput>
      </div>

      <div>
        <h3>Slottable 사용</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FormInput
            type="text"
            placeholder="텍스트를 입력하세요"
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <Slottable>
            <button style={{ marginLeft: "10px", padding: "10px" }}>제출</button>
          </Slottable>
        </div>
      </div>
    </div>
  ),
};

FormInputComparison.parameters = {
  docs: {
    description: {
      story: "Slot과 Slottable을 사용한 폼 인풋 컴포넌트의 다양한 구현 방식을 비교합니다.",
    },
  },
};
