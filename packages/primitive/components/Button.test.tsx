import { render } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  it("should render correctly", () => {
    const wrapper = render(<Button label="Button" />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
