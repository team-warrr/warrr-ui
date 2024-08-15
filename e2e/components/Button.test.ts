import { Page, expect, test } from "@playwright/test";

import { axeAccessibilityScan } from "../test-utils/a11y";
import { visit } from "../test-utils/storybook";

test.describe("Button 컴포넌트", () => {
  test("primary 시각적 회귀 테스트", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "example-button--primary",
    });

    // 폰트 로딩 상태 확인 함수
    const checkFontLoaded = async (fontName: string, weight: string) => {
      return page.evaluate(
        ({ fontName, weight }) => {
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          const testText = "abcdefghijklmnopqrstuvwxyz0123456789";

          context!.font = `${weight} 12px Arial`;
          const baselineWidth = context!.measureText(testText).width;

          context!.font = `${weight} 12px ${fontName}, Arial`;
          const testWidth = context!.measureText(testText).width;

          return baselineWidth !== testWidth;
        },
        { fontName, weight }
      );
    };

    await page.waitForFunction(() => document.fonts.ready);

    // 폰트 로딩 상태 확인 및 로깅
    const isBoldArialLoaded = await checkFontLoaded("Arial", "bold");
    console.log("Is bold Arial loaded?", isBoldArialLoaded);

    // document.fonts API를 사용한 추가 확인
    const fontCheck = await page.evaluate(() => {
      return document.fonts.check('bold 12px "Arial"');
    });
    console.log("document.fonts.check result:", fontCheck);

    // 현재 사용 중인 폰트 정보 로깅
    const fontInfo = await page.evaluate(() => {
      const button = document.querySelector(".storybook-button");
      if (!button) return null;
      const styles = window.getComputedStyle(button);
      return {
        fontFamily: styles.fontFamily,
        fontWeight: styles.fontWeight,
      };
    });
    console.log("Button font info:", fontInfo);

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
