import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  testMatch: ["<rootDir>/packages/**/?(*.)+(spec|test).[jt]s?(x)"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
