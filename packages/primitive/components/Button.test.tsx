import { render } from "@testing-library/react";

import { Button } from "./Button";

describe("버튼 컴포넌트 테스트", () => {
  it("렌더링이 올바르게 되는지 확인합니다.", () => {
    const wrapper = render(<Button label="Button" />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("rtl을 사용해 렌더링이 올바르게 되는지 확인합니다.", () => {
    const wrapper = render(<Button label="Button" />);

    expect(wrapper.getByText("Button")).toBeInTheDocument();
  });
});
