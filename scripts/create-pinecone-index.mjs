import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

await pc.createIndex({
  name: process.env.PINECONE_INDEX,
  dimension: 768,
  metric: "cosine",
  spec: { serverless: { cloud: "aws", region: "us-east-1" } },
  waitUntilReady: true,
  suppressConflicts: true,
});

console.log("Index created!");
