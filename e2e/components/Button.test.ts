import { Page, expect, test } from "@playwright/test";

import { axeAccessibilityScan } from "../test-utils/a11y";
import { visit } from "../test-utils/storybook";

test.describe("Button 컴포넌트", () => {
  test("primary 시각적 회귀 테스트", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "example-button--primary",
    });

    try {
      await expect(page).toHaveScreenshot();
    } catch (error) {
      console.error("시각적 회귀 테스트 실패:");
      console.error(error);
      await page.screenshot({ path: "failed-visual-test.png" });
      throw error;
    }
  });

  test("axe를 사용하여 자동 접근성 테스트", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "example-button--primary",
    });

    try {
      const accessibilityScanResults = await axeAccessibilityScan(page);
      expect(accessibilityScanResults.violations).toEqual([]);
    } catch (error) {
      console.error("접근성 테스트 실패:");
      console.error(JSON.stringify(error, null, 2));
      // 페이지 HTML 저장
      const html = await page.content();
      console.error("Page HTML:", html);
      throw error;
    }
  });
});
