import path from "node:path";

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: path.join(__dirname, "e2e"),
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  outputDir: path.join(__dirname, ".playwright", "results"),
  snapshotDir: path.join(__dirname, ".playwright", "snapshots"),
  reporter: [
    ["line"],
    process.env.CI
      ? ["blob"]
      : ["html", { open: "never", outputFolder: path.join(__dirname, ".playwright/report") }],
    [
      "json",
      {
        outputFile: path.join(__dirname, ".playwright", "results.json"),
      },
    ],
  ],
  use: {
    baseURL: "http://localhost:6006",
    trace: "on-first-retry",
    viewport: {
      width: 1012,
      height: 768,
    },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});
