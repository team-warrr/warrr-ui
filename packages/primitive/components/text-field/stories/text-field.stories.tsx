import React, { ChangeEvent, FormEvent, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import TextField from "../src/text-field";

const meta = {
  title: "UI/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "텍스트 입력을 위한 필드와 그에 따른 라벨, 오류 메시지, 설명 등을 함께 제공하여 입력 폼을 구성할 수 있는 컴포넌트입니다.",
  },
  argTypes: {},
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <TextField>
        <TextField.Input />
      </TextField>
    ),
  },
};

export const WithPlaceholder: Story = {
  args: {
    children: (
      <TextField>
        <TextField.Input placeholder="입력하세요" />
      </TextField>
    ),
  },
};

export const WithDefaultValue: Story = {
  args: {
    children: (
      <TextField>
        <TextField.Input defaultValue="기본값" />
      </TextField>
    ),
  },
};

export const WithControlledValue = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <TextField>
      <TextField.Input value={value} onChange={handleChange} />
    </TextField>
  );
};

export const WithCustomInputType = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      alert("제출 성공");
      return;
    }

    alert("제출 실패");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField>
        <TextField.Label htmlFor="email">이메일</TextField.Label>
        <TextField.Input
          type="email"
          id="email"
          pattern=".+@gmail\.com"
          placeholder="example@gmail.com"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">제출</button>
      </TextField>
    </form>
  );
};

export const WithLabel: Story = {
  args: {
    children: (
      <TextField>
        <TextField.Label htmlFor="username">사용자 이름</TextField.Label>
        <TextField.Input placeholder="사용자 이름을 입력하세요" id="username" />
      </TextField>
    ),
  },
};

export const WithDescription: Story = {
  args: {
    children: (
      <TextField>
        <TextField.Input placeholder="사용자 이름을 입력하세요" />
        <TextField.Description>사용자 이름은 최대 4글자입니다.</TextField.Description>
      </TextField>
    ),
  },
};

export const WithErrorMessage = () => {
  const [isInvalid, setIsInvalid] = useState(true);

  const handleClick = () => {
    setIsInvalid((prev) => !prev);
  };

  return (
    <>
      <TextField isInvalid={isInvalid}>
        <TextField.Input placeholder="사용자 이름을 입력하세요" />
        <TextField.ErrorMessage>사용자 이름은 최대 4글자입니다.</TextField.ErrorMessage>
      </TextField>
      <button onClick={handleClick}>에러 상태 변경</button>
    </>
  );
};

export const WithRightContent: Story = {
  args: {
    children: (
      <TextField>
        <TextField.Input />
        <TextField.RightContent>오른쪽 요소</TextField.RightContent>
      </TextField>
    ),
  },
};

export const WithLeftContent: Story = {
  args: {
    children: (
      <TextField>
        <TextField.LeftContent>왼쪽 요소</TextField.LeftContent>
        <TextField.Input />
      </TextField>
    ),
  },
};
