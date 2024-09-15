import { Page, expect, test } from "@playwright/test";

import { axeAccessibilityScan } from "../../test-utils/a11y";
import { visit } from "../../test-utils/storybook";

test.describe("divider 컴포넌트", () => {
  test("horizontal 시각적 회귀 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-divider--horizontal",
    });

    await expect(page).toHaveScreenshot();
  });

  test("vertical 시각적 회귀 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-divider--vertical",
    });

    await expect(page).toHaveScreenshot();
  });

  test("axe를 사용한 웹 접근성 테스트를 통과해야 합니다.(horizontal)", async ({
    page,
  }: {
    page: Page;
  }) => {
    await visit(page, {
      id: "ui-divider--horizontal",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("axe를 사용한 웹 접근성 테스트를 통과해야 합니다.(vertical)", async ({
    page,
  }: {
    page: Page;
  }) => {
    await visit(page, {
      id: "ui-divider--vertical",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
