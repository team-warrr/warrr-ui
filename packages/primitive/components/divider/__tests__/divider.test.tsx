import * as React from "react";
import { createRef } from "react";

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Divider } from "../src";

describe("Divider", () => {
  it("올바르게 렌더링되어야 합니다.", () => {
    const { container } = render(<Divider />);

    expect(container).toBeInTheDocument();
  });

  it("ref가 전달되어야 합니다.", () => {
    const ref = createRef<HTMLDivElement>();

    render(<Divider ref={ref} />);

    expect(ref.current).not.toBeNull();
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
