import fs from "fs";
import path from "path";
import type { BlogPost } from "@/content/blog";
import type { DocPage } from "@/content/docs";

const DATA_DIR = path.join(process.cwd(), "data");

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

// ─── BLOG ────────────────────────────────────────────────────────────────────

const BLOG_FILE = path.join(DATA_DIR, "blog.json");

export function readBlogPosts(): BlogPost[] {
  ensureDir();
  if (!fs.existsSync(BLOG_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(BLOG_FILE, "utf-8")) as BlogPost[];
  } catch {
    return [];
  }
}

export function writeBlogPosts(posts: BlogPost[]): void {
  ensureDir();
  fs.writeFileSync(BLOG_FILE, JSON.stringify(posts, null, 2), "utf-8");
}

// ─── DOCS ────────────────────────────────────────────────────────────────────

const DOCS_FILE = path.join(DATA_DIR, "docs.json");

export function readDocs(): DocPage[] {
  ensureDir();
  if (!fs.existsSync(DOCS_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(DOCS_FILE, "utf-8")) as DocPage[];
  } catch {
    return [];
  }
}

export function writeDocs(docs: DocPage[]): void {
  ensureDir();
  fs.writeFileSync(DOCS_FILE, JSON.stringify(docs, null, 2), "utf-8");
}