import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("component base file generator", {
    description: "generate component base files",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "Enter the name of the component you want to create (ex. button): ",
      },
      {
        type: "list",
        name: "packageName",
        message: "Select the package where you want to create the component: \n",
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
