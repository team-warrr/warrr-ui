import * as React from "react";
import { createRef } from "react";

import { render } from "@testing-library/react";

import { TextField } from "../src";

describe("TextField", () => {
  it("올바르게 렌더링되어야 합니다.", () => {
    const { container } = render(<TextField />);

    expect(container).toBeInTheDocument();
  });

  it("ref가 전달되어야 합니다.", () => {
    const ref = createRef<HTMLDivElement>();

    render(<TextField ref={ref} />);

    expect(ref.current).not.toBeNull();
  });
});
