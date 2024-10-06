import { Page, expect, test } from "@playwright/test";

import { axeAccessibilityScan } from "../../test-utils/a11y";
import { visit } from "../../test-utils/storybook";

test.describe("TextField 컴포넌트", () => {
  test("시각적 회귀 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--default",
    });

    await expect(page).toHaveScreenshot();
  });

  test("axe를 사용한 웹 접근성 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--default",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("시각적 회귀 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-placeholder",
    });

    await expect(page).toHaveScreenshot();
  });

  test("axe를 사용한 웹 접근성 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-placeholder",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("시각적 회귀 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-default-value",
    });

    await expect(page).toHaveScreenshot();
  });

  test("axe를 사용한 웹 접근성 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-default-value",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("시각적 회귀 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-controlled-value",
    });

    await expect(page).toHaveScreenshot();
  });

  test("axe를 사용한 웹 접근성 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-controlled-value",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("시각적 회귀 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-custom-input-type",
    });

    await expect(page).toHaveScreenshot();
  });

  test("axe를 사용한 웹 접근성 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-custom-input-type",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("시각적 회귀 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-label",
    });

    await expect(page).toHaveScreenshot();
  });

  test("axe를 사용한 웹 접근성 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-label",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("시각적 회귀 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-description",
    });

    await expect(page).toHaveScreenshot();
  });

  test("axe를 사용한 웹 접근성 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-description",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("시각적 회귀 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-error-message",
    });

    await expect(page).toHaveScreenshot();
  });

  test("axe를 사용한 웹 접근성 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-error-message",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("시각적 회귀 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-left-content",
    });

    await expect(page).toHaveScreenshot();
  });

  test("axe를 사용한 웹 접근성 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-left-content",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("시각적 회귀 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-right-content",
    });

    await expect(page).toHaveScreenshot();
  });

  test("axe를 사용한 웹 접근성 테스트를 통과해야 합니다.", async ({ page }: { page: Page }) => {
    await visit(page, {
      id: "ui-text-field--with-right-content",
    });

    const accessibilityScanResults = await axeAccessibilityScan(page);
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
