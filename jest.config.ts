import type { Config } from "jest";

const config: Config = {
  // The test environment that will be used for testing
  testEnvironment: "jsdom",
  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",
};

export default config;
