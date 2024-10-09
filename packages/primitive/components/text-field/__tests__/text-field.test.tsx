import { createRef, useState } from "react";

import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import TextField from "../src/text-field";

describe("TextField", () => {
  it("올바르게 렌더링되어야 합니다.", () => {
    const { container } = render(
      <TextField>
        <TextField.Input />
      </TextField>
    );
    const input = container.querySelector("input");

    expect(input).toBeInTheDocument();
  });

  it("ref가 정상적으로 전달되어야 합니다.", () => {
    const ref = createRef<HTMLInputElement>();
    render(
      <TextField>
        <TextField.Input ref={ref} />
      </TextField>
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("Input이 기본값을 올바르게 렌더링해야 합니다.", () => {
    const { container } = render(
      <TextField>
        <TextField.Input defaultValue="기본값" />
      </TextField>
    );
    const input = container.querySelector("input");

    expect(input).toHaveValue("기본값");
  });

  it("Input이 placeholder를 정상적으로 렌더링해야 합니다.", () => {
    const { getByPlaceholderText } = render(
      <TextField>
        <TextField.Input placeholder="입력해주세요" />
      </TextField>
    );
    const input = getByPlaceholderText("입력해주세요");

    expect(input).toBeInTheDocument();
  });

  it("Input이 제어 컴포넌트로서 정상적으로 값을 변경할 수 있어야 합니다.", async () => {
    const { container } = render(<ControlledInput />);
    const input = container.querySelector("input") as HTMLInputElement;

    await userEvent.type(input, "test@example.com");

    expect(input.value).toBe("test@example.com");
  });

  it("Input이 비제어 컴포넌트로서 정상적으로 값을 변경할 수 있어야 합니다.", async () => {
    const { container } = render(
      <TextField>
        <TextField.Input />
      </TextField>
    );
    const input = container.querySelector("input") as HTMLInputElement;

    await userEvent.type(input, "test@example.com");

    expect(input.value).toBe("test@example.com");
  });

  it("Input에 커스텀 type을 정상적으로 전달할 수 있어야 합니다.", () => {
    const { container } = render(
      <TextField>
        <TextField.Input type="password" />
      </TextField>
    );
    const input = container.querySelector('input[type="password"]');

    expect(input).toBeInTheDocument();
  });

  it("Label이 정상적으로 표시되어야 합니다.", () => {
    const { getByLabelText } = render(
      <TextField>
        <TextField.Label htmlFor="password">비밀번호</TextField.Label>
        <TextField.Input type="password" id="password" />
      </TextField>
    );
    const label = getByLabelText("비밀번호");

    expect(label).toBeInTheDocument();
  });

  it("에러 상태인 경우 에러 메시지가 정상적으로 표시되어야 합니다.", () => {
    const { getByText } = render(
      <TextField isInvalid>
        <TextField.Input />
        <TextField.ErrorMessage>에러가 발생했습니다.</TextField.ErrorMessage>
      </TextField>
    );
    const errorMessage = getByText("에러가 발생했습니다.");

    expect(errorMessage).toBeInTheDocument();
  });

  it("Description이 정상적으로 표시되어야 합니다.", () => {
    const { getByText } = render(
      <TextField>
        <TextField.Input />
        <TextField.Description>TextField 설명입니다.</TextField.Description>
      </TextField>
    );
    const description = getByText("TextField 설명입니다.");

    expect(description).toBeInTheDocument();
  });

  it("LeftContent가 정상적으로 표시되어야 합니다.", () => {
    const { getByText } = render(
      <TextField>
        <TextField.LeftContent>왼쪽 요소</TextField.LeftContent>
        <TextField.Input />
      </TextField>
    );
    const leftContent = getByText("왼쪽 요소");

    expect(leftContent).toBeInTheDocument();
  });

  it("RightContent가 정상적으로 표시되어야 합니다.", () => {
    const { getByText } = render(
      <TextField>
        <TextField.Input />
        <TextField.RightContent>오른쪽 요소</TextField.RightContent>
      </TextField>
    );
    const rightContent = getByText("오른쪽 요소");

    expect(rightContent).toBeInTheDocument();
  });
});

const ControlledInput = () => {
  const [value, setValue] = useState("");

  return (
    <TextField>
      <TextField.Label htmlFor="email">이메일</TextField.Label>
      <TextField.Input
        type="email"
        id="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </TextField>
  );
};
