import { Schema, model, models, type Model } from "mongoose";

export interface IKnowledgeDoc {
  _id?: string;
  title: string;
  type: "pdf" | "text";
  fileName?: string;
  fileSize?: number;
  pages?: number;
  content?: string; // extracted text (select:false) so we can edit / re-index without the original file
  contentHash: string; // sha256, blocks duplicate uploads
  charCount: number;
  chunkCount: number;
  status: "processing" | "ready" | "failed" | "unindexed";
  error?: string;
  enabled: boolean;
  embeddingModel: string;
  indexedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const KnowledgeDocSchema = new Schema<IKnowledgeDoc>(
  {
    title: { type: String, required: true, trim: true, maxlength: 200 },
    type: { type: String, enum: ["pdf", "text"], required: true },
    fileName: String,
    fileSize: Number,
    pages: Number,
    content: { type: String, select: false },
    contentHash: { type: String, required: true, index: true },
    charCount: { type: Number, default: 0 },
    chunkCount: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["processing", "ready", "failed", "unindexed"],
      default: "processing",
    },
    error: { type: String, default: "" },
    enabled: { type: Boolean, default: true },
    embeddingModel: { type: String, default: "gemini-embedding-001" },
    indexedAt: Date,
  },
  { timestamps: true }
);

export const KnowledgeDoc: Model<IKnowledgeDoc> =
  (models.KnowledgeDoc as Model<IKnowledgeDoc>) ||
  model<IKnowledgeDoc>("KnowledgeDoc", KnowledgeDocSchema);