import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("component base file generator", {
    description: "generate component base files",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "생성할 컴포넌트의 이름을 입력하세요 (예: button): ",
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
        destination: `packages/{{packageName}}/components/{{componentName}}`,
        abortOnFail: true,
      },
    ],
  });
}
