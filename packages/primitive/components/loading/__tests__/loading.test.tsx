import * as React from "react";
import { createRef } from "react";

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Loading } from "../src";

describe("Loading", () => {
  it("올바르게 렌더링되어야 합니다.", () => {
    const { container } = render(<Loading />);

    expect(container).toBeInTheDocument();
  });

  it("ref가 전달되어야 합니다.", () => {
    const ref = createRef<HTMLDivElement>();

    render(<Loading ref={ref} />);

    expect(ref.current).not.toBeNull();
  });
});
