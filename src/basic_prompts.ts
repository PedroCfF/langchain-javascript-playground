import { PromptTemplate } from "langchain/prompts";

export const run = async (): Promise<string> => {
  const template = "Please provide me a simple function that reverses a string in {progLanguage}";
  const prompt = new PromptTemplate({ template, inputVariables: ["progLanguage"] });
  const res = prompt.format({ progLanguage: "java" });

  return res;
};

run()
  .then((result) => {
    console.log("Prompt Output: ", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
