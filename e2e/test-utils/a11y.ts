import AxeBuilder from "@axe-core/playwright";
import { Page } from "@playwright/test";
import { AxeResults } from "axe-core";

export async function axeAccessibilityScan(page: Page): Promise<AxeResults> {
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .disableRules(["color-contrast"])
    .analyze();

  return accessibilityScanResults;
}
