import { Page, expect, test } from "@playwright/test";

import { axeAccessibilityScan } from "../../test-utils/a11y";
import { visit } from "../../test-utils/storybook";

test.describe("loading 컴포넌트", () => {
  test("기본 시각적 회귀 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-loading--default",
    });

    await expect(page).toHaveScreenshot();
  });

  test("axe를 사용한 웹 접근성 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-loading--default",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
