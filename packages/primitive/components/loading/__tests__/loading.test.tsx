import * as React from "react";
import { createRef } from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

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

  it("aria 속성이 올바르게 설정되어야 한다", () => {
    render(<Loading />);
    const loadingElement = screen.getByRole("status");
    expect(loadingElement).toHaveAttribute("aria-live", "polite");
    expect(loadingElement).toHaveAttribute("aria-busy", "true");
  });

  it("as props가 전달되지 않는다면, div 엘리먼트로 렌더링되어야 한다", () => {
    render(<Loading />);
    const loadingElement = screen.getByRole("status");
    expect(loadingElement.tagName).toBe("DIV");
  });

  it("as props가 전달될 경우, 지정된 컴포넌트로 렌더링되어야 한다", () => {
    render(<Loading as="span" />);
    const loadingElement = screen.getByRole("status");
    expect(loadingElement.tagName).toBe("SPAN");
  });

  it("다른 element로 렌더링되더라도 웹 접근성을 유지해야 한다.", () => {
    render(<Loading as="span">Loading...</Loading>);
    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toHaveAttribute("role", "status");
    expect(loadingElement).toHaveAttribute("aria-live", "polite");
    expect(loadingElement).toHaveAttribute("aria-busy", "true");
  });

  it("추가적으로 전달되는 props가 전달되어야 한다.", () => {
    render(<Loading data-testid="loading" />);
    const loadingElement = screen.getByTestId("loading");
    expect(loadingElement).toBeInTheDocument();
  });

  it("children이 존재할 경우, 커스텀 fallback 값이 표시되어야 한다", () => {
    const customFallback = "데이터를 불러오는 중입니다...";
    render(<Loading>{customFallback}</Loading>);
    const loadingElement = screen.getByText(customFallback);
    expect(loadingElement).toBeInTheDocument();
  });

  it("children이 존재하지 않을 경우, 기본 fallback 값이 표시되어야 한다", () => {
    const defaultFallback = "로딩중입니다...";
    render(<Loading />);
    const loadingElement = screen.getByText(defaultFallback);
    expect(loadingElement).toBeInTheDocument();
  });
});
