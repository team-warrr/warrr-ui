import { ComponentProps, createRef } from "react";

import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { Slot, Slottable } from "../src";

describe("Slot 컴포넌트", () => {
  it("정상적으로 렌더링되어야 합니다", () => {
    const { container } = render(<Slot>Hello</Slot>);
    expect(container).toBeInTheDocument();
  });

  it("ref가 전달되어야 합니다", () => {
    const ref = createRef<HTMLElement>();
    render(
      <Slot ref={ref}>
        <div>Hello</div>
      </Slot>
    );
    expect(ref.current).not.toBeNull();
  });

  describe("Slottable 컴포넌트", () => {
    it("Slottable로 감싼 요소가 렌더링되어야 합니다", () => {
      render(
        <Slot>
          <div>
            Hello
            <Slottable>
              <strong>World</strong>
            </Slottable>
          </div>
        </Slot>
      );
      expect(screen.getByText("World")).toBeInTheDocument();
    });
  });

  describe("이벤트 핸들러", () => {
    const handleClick = jest.fn();
    const handleSlotClick = jest.fn();

    // 각 테스트 전에 이벤트 핸들러 초기화
    beforeEach(() => {
      handleClick.mockReset();
      handleSlotClick.mockReset();
    });

    it("Slot에 전달된 onClick 핸들러가 호출되어야 합니다", async () => {
      render(
        <Slot onClick={handleClick}>
          <div>Click me</div>
        </Slot>
      );

      await userEvent.click(screen.getByText("Click me"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("Slot의 자식 요소에 전달된 onClick 핸들러가 호출되어야 합니다", async () => {
      render(
        <Slot>
          <button onClick={handleClick}>Click me</button>
        </Slot>
      );

      await userEvent.click(screen.getByText("Click me"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("Slot과 자식 요소 모두에 onClick 핸들러가 전달되었을 때, 두 핸들러 모두 호출되어야 합니다", async () => {
      render(
        <Slot onClick={handleSlotClick}>
          <button onClick={handleClick}>Click me</button>
        </Slot>
      );

      await userEvent.click(screen.getByText("Click me"));
      expect(handleSlotClick).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Props 전달", () => {
    it("Slot에 전달된 props가 자식 요소에 전달되어야 합니다", () => {
      render(
        <Slot className="parent" data-testid="child">
          <div>Child</div>
        </Slot>
      );

      // 자식 요소가 Slot에서 전달된 props를 가지고 있는지 확인
      const child = screen.getByTestId("child");
      expect(child).toHaveClass("parent");
    });

    it("Slot에 전달된 style props가 자식 요소에 전달되어야 합니다", () => {
      render(
        <Slot style={{ color: "red" }}>
          <div>Child</div>
        </Slot>
      );
      expect(screen.getByText("Child")).toHaveStyle({ color: "red" });
    });
  });

  describe("Slot을 사용하는 Link 컴포넌트", () => {
    it("asChild prop이 없으면 a 태그로 렌더링되어야 합니다", () => {
      render(<Link href="#">Link</Link>);
      expect(screen.getByRole("link")).toHaveAttribute("href", "#");
    });

    it("asChild prop이 true이면 Slot으로 래핑되어야 합니다", () => {
      render(
        <Link asChild>
          <button>Button</button>
        </Link>
      );
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("asChild prop이 true일 때 전달된 props가 자식 요소에 전달되어야 합니다", () => {
      render(
        <Link asChild className="link" style={{ color: "red" }}>
          <button className="button">Button</button>
        </Link>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("link");
      expect(button).toHaveClass("button");
      expect(button).toHaveStyle({ color: "red" });
    });

    it("asChild prop이 true일 때 이벤트 핸들러가 자식 요소에 전달되어야 합니다", async () => {
      const handleClick = jest.fn();
      render(
        <Link asChild onClick={handleClick}>
          <button>Button</button>
        </Link>
      );

      await userEvent.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});

// Link 컴포넌트 테스트

interface LinkProps extends ComponentProps<"a"> {
  asChild?: boolean;
}
const Link = ({ asChild, ...props }: LinkProps) => {
  const Comp = asChild ? Slot : "a";
  return <Comp {...props} />;
};
