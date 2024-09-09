import { exec } from "child_process";
import { promisify } from "util";

import type { PlopTypes } from "@turbo/gen";

function toKebabCase(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, '$1-$2') 
    .replace(/\s+/g, '-')                
    .toLowerCase();                     
}



export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setHelper("kebabCase", (text: string) => {
    return toKebabCase(text);
  });

  plop.setActionType("format", async () => {
    try {
      const execPromise = promisify(exec);
      const { stdout, stderr } = await execPromise("pnpm format");
  
      if (stderr) {
        throw new Error(`pnpm format 실패: ${stderr}`);
      }
  
      console.log(stdout);
      return "pnpm format이 성공적으로 적용되었습니다.";
    } catch (error) {
      throw new Error(`pnpm format 실패: ${(error as Error).message}`);
    }
  });

  plop.setGenerator("컴포넌트 기본 파일 생성기", {
    description: "컴포넌트의 기본 파일을 생성합니다.",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "생성할 컴포넌트의 이름을 입력하세요 (예: Button): ",
      },
      {
        type: "list",
        name: "packageName",
        message: "컴포넌트를 생성할 패키지를 선택하세요: \n",
        choices: ["primitive", "themed"],
      },
    ],
    actions: [
      {
        type: "addMany",
        templateFiles: "./templates/component/**",
        base: "./templates/component",
        destination: `packages/{{packageName}}/components/{{kebabCase componentName}}`,
        abortOnFail: true,
      },
      {
        type: "format",
      },
    ],
  });

  plop.setGenerator("컴포넌트 e2e 테스트 파일 생성기", {
    description: "컴포넌트의 e2e 테스트 파일을 생성합니다.",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "생성할 컴포넌트의 이름을 입력하세요 (예: Button): ",
      },
    ],
    actions: [
      {
        type: "add",
        templateFile: "./templates/e2e/test.ts.hbs",
        path: 'e2e/components/{{componentName}}.test.ts',
      },
    ],
  });
}
