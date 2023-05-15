import { OpenAI } from "langchain/llms/openai";

import { BufferMemory } from "langchain/memory";

import { LLMChain } from "langchain/chains";

import { PromptTemplate } from "langchain/prompts";

import * as dotenv from "dotenv";
dotenv.config();

export const run = async (): Promise<string> => {

  const memory = new BufferMemory({ memoryKey: "chat_history" });

  const model = new OpenAI({ temperature: 0.9 });

  const template = `The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.
    Current conversation:
    {chat_history}
    Human: {input}
    AI:`;

  const prompt = PromptTemplate.fromTemplate(template);

  const chain = new LLMChain({ llm: model, prompt, memory });

  const res1 = await chain.call({ input: "Hi! Mi name is Pi." });

  const res2 = await chain.call({ input: "What's my name?" });

  const res3 = await chain.call({ input: "Do you remember what my name was?" });

  return res1.text;
};

run()
  .then((result) => {
    console.log("LLM Output: ", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });