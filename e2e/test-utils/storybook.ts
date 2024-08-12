import { Page } from "@playwright/test";

type Value =
  | string
  | boolean
  | number
  | {
      [Key: string]: Value;
    };

interface Options {
  id: string;
  args?: Record<string, string | boolean>;
  globals?: Record<string, Value>;
}

const { STORYBOOK_URL = "http://localhost:6006" } = process.env;

export async function visit(page: Page, options: Options) {
  const { id, args, globals } = options;
  const url = process.env.CI
    ? new URL(`${STORYBOOK_URL}/iframe`)
    : new URL(`${STORYBOOK_URL}/iframe.html`);

  url.searchParams.set("id", id);
  url.searchParams.set("viewMode", "story");

  if (args) {
    const serializedArgs = Object.entries(args)
      .map(([key, value]) => `${key}:${value}`)
      .join(";");
    url.searchParams.set("args", serializedArgs);
  }

  if (globals) {
    let params = "";
    for (const [key, value] of Object.entries(globals)) {
      if (params !== "") {
        params += ";";
      }
      if (typeof value === "object") {
        params += serializeObject(value, key);
      } else {
        params += `${key}:${value}`;
      }
    }
    url.searchParams.set("globals", params);
  }

  await page.goto(url.toString());

  // 스토리북이 로딩될 때까지 대기하여야 playwright 테스트 가능
  await page.waitForSelector("body.sb-show-main:not(.sb-show-preparing-story)");
  await page.waitForSelector("#storybook-root > *");
}

function serializeObject<T extends { [Key: string]: Value }>(
  object: T,
  parentPath: string
): string {
  return Object.entries(object)
    .map(([key, value]) => {
      if (typeof value === "object") {
        return serializeObject(value, `${parentPath}.${key}`);
      }
      return `${parentPath}.${key}:${serialize(value)}`;
    })
    .join(";");
}

function serialize(value: Value): string {
  if (typeof value === "boolean") {
    return `!${value}`;
  }

  return `${value}`;
}
