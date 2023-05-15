import { OpenAI } from "langchain/llms/openai";

import * as dotenv from "dotenv";
dotenv.config();

export const run = async (): Promise<string> => {
  const model = new OpenAI({ temperature: 0.9 });
  const res = await model.call(
    "Please provide me a simple function that reverses a string in java"
  );
  return res;
};

run()
  .then((result) => {
    console.log("LLM Output: ", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });