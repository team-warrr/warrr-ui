import { Page, expect, test } from "@playwright/test";

import { axeAccessibilityScan } from "../test-utils/a11y";
import { visit } from "../test-utils/storybook";

test.describe("Button 컴포넌트", () => {
  test("primary 시각적 회귀 테스트", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "example-button--primary",
    });

    await page.waitForFunction(() => document.fonts.ready);
    await page.waitForTimeout(1000); // 1초 대기
    await expect(page).toHaveScreenshot();
  });

  test("axe를 사용하여 자동 접근성 테스트", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "example-button--primary",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
