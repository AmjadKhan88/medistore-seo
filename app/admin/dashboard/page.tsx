"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Pencil, LogOut, FileText, BookOpen, X, Save } from "lucide-react";
import type { BlogPost } from "@/content/blog";
import type { DocPage } from "@/content/docs";

// ─── Styles helpers ────────────────────────────────────────────────────────

const card: React.CSSProperties = {
  border: "1px solid rgb(var(--border))",
  borderRadius: "10px",
  padding: "20px",
  background: "rgb(var(--background))",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "9px 12px",
  borderRadius: "7px",
  border: "1px solid rgb(var(--border))",
  background: "rgb(var(--muted))",
  color: "rgb(var(--foreground))",
  fontSize: 13,
  boxSizing: "border-box",
};

const btnPrimary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "8px 16px",
  borderRadius: "7px",
  border: "none",
  background: "rgb(var(--primary))",
  color: "rgb(var(--primary-foreground))",
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
};

const btnGhost: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "7px 14px",
  borderRadius: "7px",
  border: "1px solid rgb(var(--border))",
  background: "transparent",
  color: "rgb(var(--foreground))",
  fontSize: 13,
  cursor: "pointer",
};

const btnDanger: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  padding: "6px 10px",
  borderRadius: "6px",
  border: "none",
  background: "rgb(220 50 50 / 0.12)",
  color: "rgb(200 40 40)",
  fontSize: 12,
  cursor: "pointer",
};

const label: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  marginBottom: 4,
  opacity: 0.7,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
};

// ─── Blog Editor ────────────────────────────────────────────────────────────

const emptyPost = (): BlogPost => ({
  slug: "",
  title: "",
  description: "",
  date: new Date().toISOString().split("T")[0],
  author: "MediStore Editorial Team",
  category: "General",
  tags: [],
  body: "",
});

function BlogEditor({
  initial,
  onSave,
  onCancel,
}: {
  initial: BlogPost;
  onSave: (p: BlogPost) => void;
  onCancel: () => void;
}) {
  const [post, setPost] = useState<BlogPost>(initial);
  const [tagInput, setTagInput] = useState(initial.tags.join(", "));

  function set(key: keyof BlogPost, value: string) {
    setPost((p) => ({ ...p, [key]: value }));
  }

  function handleSave() {
    const tags = tagInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const slug =
      post.slug ||
      post.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    onSave({ ...post, slug, tags });
  }

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <span style={label}>Title *</span>
          <input style={inputStyle} value={post.title} onChange={(e) => set("title", e.target.value)} placeholder="Article title" />
        </div>
        <div>
          <span style={label}>Slug (auto from title if empty)</span>
          <input style={inputStyle} value={post.slug} onChange={(e) => set("slug", e.target.value)} placeholder="my-article-slug" />
        </div>
        <div>
          <span style={label}>Category</span>
          <input style={inputStyle} value={post.category} onChange={(e) => set("category", e.target.value)} placeholder="Inventory" />
        </div>
        <div>
          <span style={label}>Date</span>
          <input style={inputStyle} type="date" value={post.date} onChange={(e) => set("date", e.target.value)} />
        </div>
        <div>
          <span style={label}>Author</span>
          <input style={inputStyle} value={post.author} onChange={(e) => set("author", e.target.value)} />
        </div>
        <div>
          <span style={label}>Tags (comma separated)</span>
          <input style={inputStyle} value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="pharmacy, inventory" />
        </div>
      </div>
      <div>
        <span style={label}>Description *</span>
        <textarea
          style={{ ...inputStyle, minHeight: 64, resize: "vertical" }}
          value={post.description}
          onChange={(e) => set("description", e.target.value)}
          placeholder="Short description for SEO meta tag"
        />
      </div>
      <div>
        <span style={label}>Body (Markdown — use ## for headings) *</span>
        <textarea
          style={{ ...inputStyle, minHeight: 280, resize: "vertical", fontFamily: "monospace", fontSize: 13 }}
          value={post.body}
          onChange={(e) => set("body", e.target.value)}
          placeholder={"## Introduction\n\nWrite your article here...\n\n## Next Section\n\nMore content..."}
        />
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <button type="button" style={btnPrimary} onClick={handleSave}>
          <Save size={14} /> Save Post
        </button>
        <button type="button" style={btnGhost} onClick={onCancel}>
          <X size={14} /> Cancel
        </button>
      </div>
    </div>
  );
}

// ─── Doc Editor ─────────────────────────────────────────────────────────────

const emptyDoc = (): DocPage => ({
  slug: "",
  title: "",
  description: "",
  sections: [{ title: "", body: "", code: "" }],
});

function DocEditor({
  initial,
  onSave,
  onCancel,
}: {
  initial: DocPage;
  onSave: (d: DocPage) => void;
  onCancel: () => void;
}) {
  const [doc, setDoc] = useState<DocPage>(initial);

  function setField(key: keyof DocPage, value: string) {
    setDoc((d) => ({ ...d, [key]: value }));
  }

  function setSection(idx: number, key: string, value: string) {
    setDoc((d) => {
      const sections = [...d.sections];
      sections[idx] = { ...sections[idx], [key]: value };
      return { ...d, sections };
    });
  }

  function addSection() {
    setDoc((d) => ({ ...d, sections: [...d.sections, { title: "", body: "", code: "" }] }));
  }

  function removeSection(idx: number) {
    setDoc((d) => ({ ...d, sections: d.sections.filter((_, i) => i !== idx) }));
  }

  function handleSave() {
    const slug =
      doc.slug ||
      doc.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    const sections = doc.sections
      .filter((s) => s.title || s.body)
      .map((s) => ({ title: s.title, body: s.body, ...(s.code ? { code: s.code } : {}) }));
    onSave({ ...doc, slug, sections });
  }

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <span style={label}>Title *</span>
          <input style={inputStyle} value={doc.title} onChange={(e) => setField("title", e.target.value)} placeholder="Getting Started" />
        </div>
        <div>
          <span style={label}>Slug (auto from title if empty)</span>
          <input style={inputStyle} value={doc.slug} onChange={(e) => setField("slug", e.target.value)} placeholder="getting-started" />
        </div>
      </div>
      <div>
        <span style={label}>Description *</span>
        <textarea
          style={{ ...inputStyle, minHeight: 60, resize: "vertical" }}
          value={doc.description}
          onChange={(e) => setField("description", e.target.value)}
          placeholder="Brief description of this doc page"
        />
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ ...label, margin: 0 }}>Sections</span>
          <button type="button" style={btnGhost} onClick={addSection}>
            <Plus size={13} /> Add Section
          </button>
        </div>
        <div style={{ display: "grid", gap: 16 }}>
          {doc.sections.map((section, idx) => (
            <div key={idx} style={{ ...card, position: "relative", padding: "16px" }}>
              <button
                type="button"
                onClick={() => removeSection(idx)}
                style={{ ...btnDanger, position: "absolute", top: 12, right: 12 }}
              >
                <Trash2 size={12} />
              </button>
              <div style={{ display: "grid", gap: 10 }}>
                <div>
                  <span style={label}>Section Title</span>
                  <input
                    style={inputStyle}
                    value={section.title}
                    onChange={(e) => setSection(idx, "title", e.target.value)}
                    placeholder="How to do X"
                  />
                </div>
                <div>
                  <span style={label}>Body</span>
                  <textarea
                    style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
                    value={section.body}
                    onChange={(e) => setSection(idx, "body", e.target.value)}
                    placeholder="Explain this section..."
                  />
                </div>
                <div>
                  <span style={label}>Code Block (optional)</span>
                  <textarea
                    style={{ ...inputStyle, minHeight: 60, resize: "vertical", fontFamily: "monospace", fontSize: 12 }}
                    value={section.code ?? ""}
                    onChange={(e) => setSection(idx, "code", e.target.value)}
                    placeholder="npm install medistore"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button type="button" style={btnPrimary} onClick={handleSave}>
          <Save size={14} /> Save Doc
        </button>
        <button type="button" style={btnGhost} onClick={onCancel}>
          <X size={14} /> Cancel
        </button>
      </div>
    </div>
  );
}

// ─── Main Dashboard ──────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<"blog" | "docs">("blog");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [docs, setDocs] = useState<DocPage[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [editingDoc, setEditingDoc] = useState<DocPage | null>(null);
  const [isNewPost, setIsNewPost] = useState(false);
  const [isNewDoc, setIsNewDoc] = useState(false);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const fetchPosts = useCallback(async () => {
    const res = await fetch("/api/admin/blog");
    if (res.status === 401) { router.push("/admin"); return; }
    setPosts(await res.json());
  }, [router]);

  const fetchDocs = useCallback(async () => {
    const res = await fetch("/api/admin/docs");
    if (res.status === 401) { router.push("/admin"); return; }
    setDocs(await res.json());
  }, [router]);

  useEffect(() => { fetchPosts(); fetchDocs(); }, [fetchPosts, fetchDocs]);

  function flash(m: string) {
    setMsg(m);
    setTimeout(() => setMsg(""), 3000);
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  async function savePost(post: BlogPost) {
    setSaving(true);
    await fetch("/api/admin/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    setSaving(false);
    setEditingPost(null);
    setIsNewPost(false);
    fetchPosts();
    flash("Blog post saved!");
  }

  async function deletePost(slug: string) {
    if (!confirm("Delete this post?")) return;
    await fetch("/api/admin/blog", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    fetchPosts();
    flash("Post deleted.");
  }

  async function saveDoc(doc: DocPage) {
    setSaving(true);
    await fetch("/api/admin/docs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc),
    });
    setSaving(false);
    setEditingDoc(null);
    setIsNewDoc(false);
    fetchDocs();
    flash("Doc saved!");
  }

  async function deleteDoc(slug: string) {
    if (!confirm("Delete this doc?")) return;
    await fetch("/api/admin/docs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    fetchDocs();
    flash("Doc deleted.");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "rgb(var(--background))",
        color: "rgb(var(--foreground))",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          borderBottom: "1px solid rgb(var(--border))",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
          position: "sticky",
          top: 0,
          background: "rgb(var(--background))",
          zIndex: 10,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 15 }}>MediStore Admin</span>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {msg && (
            <span style={{ fontSize: 13, color: "rgb(var(--primary))", fontWeight: 600 }}>
              ✓ {msg}
            </span>
          )}
          <button type="button" style={btnGhost} onClick={logout}>
            <LogOut size={14} /> Logout
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 24px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
          {(["blog", "docs"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "8px 18px",
                borderRadius: "8px",
                border: "1px solid rgb(var(--border))",
                background: tab === t ? "rgb(var(--primary))" : "transparent",
                color: tab === t ? "rgb(var(--primary-foreground))" : "rgb(var(--foreground))",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              {t === "blog" ? <FileText size={15} /> : <BookOpen size={15} />}
              {t === "blog" ? "Blog Posts" : "Docs"}
            </button>
          ))}
        </div>

        {/* ── BLOG TAB ── */}
        {tab === "blog" && (
          <div style={{ display: "grid", gap: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>
                Blog Posts <span style={{ fontWeight: 400, fontSize: 14, opacity: 0.5 }}>({posts.length})</span>
              </h1>
              {!editingPost && !isNewPost && (
                <button
                  type="button"
                  style={btnPrimary}
                  onClick={() => { setIsNewPost(true); setEditingPost(emptyPost()); }}
                >
                  <Plus size={15} /> New Post
                </button>
              )}
            </div>

            {editingPost && (
              <div style={card}>
                <h2 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700 }}>
                  {isNewPost ? "New Blog Post" : `Editing: ${editingPost.title}`}
                </h2>
                <BlogEditor
                  initial={editingPost}
                  onSave={savePost}
                  onCancel={() => { setEditingPost(null); setIsNewPost(false); }}
                />
              </div>
            )}

            {posts.length === 0 && !editingPost && (
              <div style={{ ...card, textAlign: "center", padding: "48px", opacity: 0.5 }}>
                No blog posts yet. Click &quot;New Post&quot; to create one.
              </div>
            )}

            {!editingPost &&
              posts.map((post) => (
                <div key={post.slug} style={{ ...card, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                  <div>
                    <p style={{ margin: "0 0 4px", fontWeight: 700 }}>{post.title}</p>
                    <p style={{ margin: 0, fontSize: 13, opacity: 0.6 }}>
                      {post.category} · {post.date} · /blog/{post.slug}
                    </p>
                    <p style={{ margin: "6px 0 0", fontSize: 13, opacity: 0.7 }}>{post.description}</p>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                    <button
                      type="button"
                      style={btnGhost}
                      onClick={() => { setEditingPost(post); setIsNewPost(false); }}
                    >
                      <Pencil size={13} /> Edit
                    </button>
                    <button type="button" style={btnDanger} onClick={() => deletePost(post.slug)}>
                      <Trash2 size={13} /> Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* ── DOCS TAB ── */}
        {tab === "docs" && (
          <div style={{ display: "grid", gap: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>
                Documentation <span style={{ fontWeight: 400, fontSize: 14, opacity: 0.5 }}>({docs.length})</span>
              </h1>
              {!editingDoc && !isNewDoc && (
                <button
                  type="button"
                  style={btnPrimary}
                  onClick={() => { setIsNewDoc(true); setEditingDoc(emptyDoc()); }}
                >
                  <Plus size={15} /> New Doc
                </button>
              )}
            </div>

            {editingDoc && (
              <div style={card}>
                <h2 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700 }}>
                  {isNewDoc ? "New Doc Page" : `Editing: ${editingDoc.title}`}
                </h2>
                <DocEditor
                  initial={editingDoc}
                  onSave={saveDoc}
                  onCancel={() => { setEditingDoc(null); setIsNewDoc(false); }}
                />
              </div>
            )}

            {docs.length === 0 && !editingDoc && (
              <div style={{ ...card, textAlign: "center", padding: "48px", opacity: 0.5 }}>
                No docs yet. Click &quot;New Doc&quot; to create one.
              </div>
            )}

            {!editingDoc &&
              docs.map((doc) => (
                <div key={doc.slug} style={{ ...card, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                  <div>
                    <p style={{ margin: "0 0 4px", fontWeight: 700 }}>{doc.title}</p>
                    <p style={{ margin: 0, fontSize: 13, opacity: 0.6 }}>
                      {doc.sections.length} sections · /docs/{doc.slug}
                    </p>
                    <p style={{ margin: "6px 0 0", fontSize: 13, opacity: 0.7 }}>{doc.description}</p>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                    <button
                      type="button"
                      style={btnGhost}
                      onClick={() => { setEditingDoc(doc); setIsNewDoc(false); }}
                    >
                      <Pencil size={13} /> Edit
                    </button>
                    <button type="button" style={btnDanger} onClick={() => deleteDoc(doc.slug)}>
                      <Trash2 size={13} /> Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}