import * as React from "react";
import { createRef } from "react";

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Divider } from "../src";

describe("Divider", () => {
  it("orientation이 default(horizontal)일 때 컴포넌트가 올바르게 렌더링되어야 합니다.", () => {
    const { container } = render(<Divider />);

    const divider = container.querySelector("hr");

    expect(divider).toBeInTheDocument();
  });

  it("orientation이 vertical일 때 컴포넌트가 올바르게 렌더링되어야 합니다.", () => {
    const { container } = render(<Divider orientation="vertical" />);

    const divider = container.querySelector("div");

    expect(divider).toBeInTheDocument();
  });

  it("orientation이 default(horizontal)일 때 ref가 전달되어야 합니다.", () => {
    const ref = createRef<HTMLHRElement>();

    render(<Divider ref={ref} />);

    expect(ref.current).not.toBeNull();

    expect(ref.current).toBeInstanceOf(HTMLHRElement);
  });

  it("orientation이 vertical일 때 ref가 전달되어야 합니다.", () => {
    const ref = createRef<HTMLDivElement>();

    render(<Divider orientation="vertical" ref={ref} />);

    expect(ref.current).not.toBeNull();

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("orientation이 default(horizontal)일 때 hr 태그를 렌더링해야 합니다.", () => {
    const { container } = render(<Divider />);

    expect(container.querySelector("hr")).toBeInTheDocument();
  });

  it("orientation이 vertical일 때 div 태그를 렌더링해야 합니다.", () => {
    const { container } = render(<Divider orientation="vertical" />);

    expect(container.querySelector("div")).toBeInTheDocument();
  });
});
