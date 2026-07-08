import mongoose, { Schema, model, models } from "mongoose";

export interface IDocSection {
  title: string;
  body: string;
  code?: string;
}

export interface IDoc {
  _id?: string;
  slug: string;
  title: string;
  description: string;
  sections: IDocSection[];
  published: boolean;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const DocSchema = new Schema<IDoc>(
  {
    slug:        { type: String, required: true, unique: true, trim: true },
    title:       { type: String, required: true, trim: true },
    description: { type: String, required: true },
    sections: [
      {
        title: { type: String, required: true },
        body:  { type: String, required: true },
        code:  { type: String, default: "" },
      },
    ],
    published: { type: Boolean, default: true },
    order:     { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Doc = models.Doc || model<IDoc>("Doc", DocSchema);