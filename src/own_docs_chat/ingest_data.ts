import { PDFLoader } from "langchain/document_loaders/fs/pdf";

import { CharacterTextSplitter } from "langchain/text_splitter";

import { OpenAIEmbeddings } from "langchain/embeddings/openai";

import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { PineconeClient } from "@pinecone-database/pinecone";

import * as dotenv from "dotenv";
dotenv.config();

export const run = async () => {
  try {
    const loader = new PDFLoader("src/own_docs_chat/docs/example.pdf", {
      splitPages: false,
    });

    const rawDocs = await loader.load();

    const splitter = new CharacterTextSplitter({
      separator: " ",
      chunkSize: 100,
      chunkOverlap: 5,
    });

    const splittedDocs = await splitter.splitDocuments(rawDocs);

    const client = new PineconeClient();

    await client.init({
      apiKey: "ff6b0527-0467-4506-8702-2226a9db2a66",
      environment: "asia-southeast1-gcp",
    });

    const pineconeIndex = client.Index("owndocschat");

    const vectors = await PineconeStore.fromDocuments(splittedDocs, new OpenAIEmbeddings(), {
      pineconeIndex,
    });

    console.log(vectors);

  } catch (error) {
    console.log('error', error);
    throw new Error('Failed to ingest the data');
  }
}

await run();

