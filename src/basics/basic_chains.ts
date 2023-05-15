import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

import * as dotenv from "dotenv";
dotenv.config();

export const run = async (): Promise<object> => {
  const model = new OpenAI({ temperature: 0.9 });

  const template = "Please provide me a simple function that reverses a string in {progLanguage}";
  const prompt = new PromptTemplate({ template, inputVariables: ["progLanguage"] });

  const chain = new LLMChain({ llm: model, prompt });

  const res = await chain.call({ progLanguage: "python" });
  return res.text;
};

run()
  .then((result) => {
    console.log("Chain Output: ", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });