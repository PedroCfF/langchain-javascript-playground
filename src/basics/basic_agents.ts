import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { OpenAI } from "langchain/llms/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

import * as dotenv from "dotenv";
dotenv.config();

export const run = async (): Promise<object> => {
  const model = new OpenAI({ temperature: 0 });

  const tools = [
    new SerpAPI(process.env.SERPAPI_API_KEY, {
      location: "Austin,Texas,United States",
      hl: "en",
      gl: "us",
    }),
    new Calculator(),
  ];

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description",
    verbose: true,
  });

  const input = `How many kilometers are in a marathon multiplied by 2?`;

  const result = await executor.call({ input });

  return result.output;
}

run()
  .then((result) => {
    console.log("LLM Output: ", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

