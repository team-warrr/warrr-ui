import { Page, expect, test } from "@playwright/test";

import { axeAccessibilityScan } from "../test-utils/a11y";
import { visit } from "../test-utils/storybook";

test.describe("Divider 컴포넌트", () => {
  test("horizontal 시각적 회귀 테스트", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-divider--horizontal",
    });

    await expect(page).toHaveScreenshot();
  });

  test("vertical 시각적 회귀 테스트", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-divider--vertical",
    });

    await expect(page).toHaveScreenshot();
  });

  test("axe를 사용하여 자동 접근성 테스트(horizontal)", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-divider--horizontal",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("axe를 사용하여 자동 접근성 테스트(vertical)", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-divider--vertical",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
