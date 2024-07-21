import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("component base file generator", {
    description: "generate component base files",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "Enter the name of the component you want to create (ex. Button): ",
      },
    ],
    actions: [
      {
        type: "addMany",
        templateFiles: "./templates/component/**",
        destination: "packages/primitive/components/{{componentName}}",
      },
    ],
  });
}
