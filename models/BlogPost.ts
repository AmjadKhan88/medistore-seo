import mongoose, { Schema, model, models } from "mongoose";

export interface IBlogPost {
  _id?: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  body: string;
  coverImage?: string;   // Cloudinary URL
  coverImageId?: string; // Cloudinary public_id (for deletion)
  published: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    slug:         { type: String, required: true, unique: true, trim: true },
    title:        { type: String, required: true, trim: true },
    description:  { type: String, required: true },
    date:         { type: String, required: true },
    author:       { type: String, default: "MediStore Editorial Team" },
    category:     { type: String, default: "General" },
    tags:         { type: [String], default: [] },
    body:         { type: String, required: true },
    coverImage:   { type: String, default: "" },
    coverImageId: { type: String, default: "" },
    published:    { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const BlogPost =
  models.BlogPost || model<IBlogPost>("BlogPost", BlogPostSchema);