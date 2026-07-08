"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Plus, Trash2, Pencil, LogOut,
  FileText, BookOpen, X, Save,
  Image as ImageIcon, Eye, EyeOff,
} from "lucide-react";
import type { IBlogPost } from "@/models/BlogPost";
import type { IDoc } from "@/models/Doc";

// ─── Shared styles ──────────────────────────────────────────────────────────

const S = {
  card: {
    border: "1px solid rgb(var(--border))",
    borderRadius: 10,
    padding: 20,
    background: "rgb(var(--background))",
  } as React.CSSProperties,

  input: {
    width: "100%",
    padding: "9px 12px",
    borderRadius: 7,
    border: "1px solid rgb(var(--border))",
    background: "rgb(var(--muted))",
    color: "rgb(var(--foreground))",
    fontSize: 13,
    boxSizing: "border-box",
    outline: "none",
  } as React.CSSProperties,

  label: {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    marginBottom: 5,
    opacity: 0.55,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  } as React.CSSProperties,

  btnPrimary: {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "8px 16px", borderRadius: 7, border: "none",
    background: "rgb(var(--primary))", color: "rgb(var(--primary-foreground))",
    fontWeight: 600, fontSize: 13, cursor: "pointer",
  } as React.CSSProperties,

  btnGhost: {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "7px 14px", borderRadius: 7,
    border: "1px solid rgb(var(--border))", background: "transparent",
    color: "rgb(var(--foreground))", fontSize: 13, cursor: "pointer",
  } as React.CSSProperties,

  btnDanger: {
    display: "inline-flex", alignItems: "center", gap: 4,
    padding: "6px 10px", borderRadius: 6, border: "none",
    background: "rgb(220 50 50 / 0.1)", color: "rgb(200 40 40)",
    fontSize: 12, cursor: "pointer",
  } as React.CSSProperties,
};

// ─── Image Upload Input ──────────────────────────────────────────────────────

function ImageUpload({
  current,
  onChange,
}: {
  current?: string;
  onChange: (base64: string) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState(current ?? "");

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setPreview(base64);
      onChange(base64);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <span style={S.label}>Cover Image (Cloudinary)</span>
      {preview && (
        <Image
          src={preview}
          alt="cover preview"
          style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 8, marginBottom: 8 }}
        />
      )}
      <button type="button" style={S.btnGhost} onClick={() => ref.current?.click()}>
        <ImageIcon size={14} /> {preview ? "Change Image" : "Upload Image"}
      </button>
      <input ref={ref} type="file" accept="image/*" style={{ display: "none" }} onChange={handleFile} />
    </div>
  );
}

// ─── Blog Editor ─────────────────────────────────────────────────────────────

const emptyPost = (): Partial<IBlogPost> => ({
  slug: "", title: "", description: "",
  date: new Date().toISOString().split("T")[0],
  author: "MediStore Editorial Team",
  category: "General",
  tags: [], body: "", published: true,
});

function BlogEditor({
  initial, onSave, onCancel, saving,
}: {
  initial: Partial<IBlogPost>;
  onSave: (p: Partial<IBlogPost> & { coverImageBase64?: string }) => void;
  onCancel: () => void;
  saving: boolean;
}) {
  const [post, setPost] = useState(initial);
  const [tagInput, setTagInput] = useState((initial.tags ?? []).join(", "));
  const [coverImageBase64, setCoverImageBase64] = useState("");

  function set(key: keyof IBlogPost, value: unknown) {
    setPost((p) => ({ ...p, [key]: value }));
  }

  function handleSave() {
    const tags = tagInput.split(",").map((t) => t.trim()).filter(Boolean);
    const slug = post.slug || post.title!.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    onSave({ ...post, slug, tags, ...(coverImageBase64 ? { coverImageBase64 } : {}) });
  }

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <span style={S.label}>Title *</span>
          <input style={S.input} value={post.title} onChange={(e) => set("title", e.target.value)} placeholder="Article title" />
        </div>
        <div>
          <span style={S.label}>Slug (auto if empty)</span>
          <input style={S.input} value={post.slug} onChange={(e) => set("slug", e.target.value)} placeholder="my-article" />
        </div>
        <div>
          <span style={S.label}>Category</span>
          <input style={S.input} value={post.category} onChange={(e) => set("category", e.target.value)} placeholder="Inventory" />
        </div>
        <div>
          <span style={S.label}>Date</span>
          <input style={S.input} type="date" value={post.date} onChange={(e) => set("date", e.target.value)} />
        </div>
        <div>
          <span style={S.label}>Author</span>
          <input style={S.input} value={post.author} onChange={(e) => set("author", e.target.value)} />
        </div>
        <div>
          <span style={S.label}>Tags (comma separated)</span>
          <input style={S.input} value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="pharmacy, billing" />
        </div>
      </div>

      <div>
        <span style={S.label}>Description *</span>
        <textarea style={{ ...S.input, minHeight: 64, resize: "vertical" }} value={post.description} onChange={(e) => set("description", e.target.value)} placeholder="Short SEO description" />
      </div>

      <ImageUpload current={post.coverImage} onChange={setCoverImageBase64} />

      <div>
        <span style={S.label}>Body (use ## for H2 headings, ### for H3) *</span>
        <textarea
          style={{ ...S.input, minHeight: 300, resize: "vertical", fontFamily: "monospace", fontSize: 13 }}
          value={post.body}
          onChange={(e) => set("body", e.target.value)}
          placeholder={"## Introduction\n\nWrite your article here.\n\n## Section Two\n\nMore content..."}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, cursor: "pointer" }}>
          <input type="checkbox" checked={post.published} onChange={(e) => set("published", e.target.checked)} />
          Published (visible on site)
        </label>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button type="button" style={{ ...S.btnPrimary, opacity: saving ? 0.7 : 1 }} onClick={handleSave} disabled={saving}>
          <Save size={14} /> {saving ? "Saving…" : "Save Post"}
        </button>
        <button type="button" style={S.btnGhost} onClick={onCancel}>
          <X size={14} /> Cancel
        </button>
      </div>
    </div>
  );
}

// ─── Doc Editor ──────────────────────────────────────────────────────────────

const emptyDoc = (): Partial<IDoc> => ({
  slug: "", title: "", description: "",
  sections: [{ title: "", body: "", code: "" }],
  published: true, order: 0,
});

function DocEditor({
  initial, onSave, onCancel, saving,
}: {
  initial: Partial<IDoc>;
  onSave: (d: Partial<IDoc>) => void;
  onCancel: () => void;
  saving: boolean;
}) {
  const [doc, setDoc] = useState(initial);

  function setField(key: keyof IDoc, value: unknown) {
    setDoc((d) => ({ ...d, [key]: value }));
  }

  function setSection(idx: number, key: string, value: string) {
    setDoc((d) => {
      const sections = [...(d.sections ?? [])];
      sections[idx] = { ...sections[idx], [key]: value };
      return { ...d, sections };
    });
  }

  function addSection() {
    setDoc((d) => ({ ...d, sections: [...(d.sections ?? []), { title: "", body: "", code: "" }] }));
  }

  function removeSection(idx: number) {
    setDoc((d) => ({ ...d, sections: (d.sections ?? []).filter((_, i) => i !== idx) }));
  }

  function handleSave() {
    const slug = doc.slug || doc.title!.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const sections = (doc.sections ?? []).filter((s) => s.title || s.body);
    onSave({ ...doc, slug, sections });
  }

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <span style={S.label}>Title *</span>
          <input style={S.input} value={doc.title} onChange={(e) => setField("title", e.target.value)} placeholder="Getting Started" />
        </div>
        <div>
          <span style={S.label}>Slug (auto if empty)</span>
          <input style={S.input} value={doc.slug} onChange={(e) => setField("slug", e.target.value)} placeholder="getting-started" />
        </div>
        <div>
          <span style={S.label}>Display Order (lower = first)</span>
          <input style={S.input} type="number" value={doc.order} onChange={(e) => setField("order", Number(e.target.value))} />
        </div>
      </div>

      <div>
        <span style={S.label}>Description *</span>
        <textarea style={{ ...S.input, minHeight: 60, resize: "vertical" }} value={doc.description} onChange={(e) => setField("description", e.target.value)} placeholder="What this doc page covers" />
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={S.label}>Sections</span>
          <button type="button" style={S.btnGhost} onClick={addSection}>
            <Plus size={13} /> Add Section
          </button>
        </div>
        <div style={{ display: "grid", gap: 14 }}>
          {(doc.sections ?? []).map((section, idx) => (
            <div key={idx} style={{ ...S.card, padding: 16, position: "relative" }}>
              <button type="button" onClick={() => removeSection(idx)} style={{ ...S.btnDanger, position: "absolute", top: 10, right: 10 }}>
                <Trash2 size={12} />
              </button>
              <div style={{ display: "grid", gap: 10 }}>
                <div>
                  <span style={S.label}>Section Title</span>
                  <input style={S.input} value={section.title} onChange={(e) => setSection(idx, "title", e.target.value)} placeholder="How to do X" />
                </div>
                <div>
                  <span style={S.label}>Body</span>
                  <textarea style={{ ...S.input, minHeight: 90, resize: "vertical" }} value={section.body} onChange={(e) => setSection(idx, "body", e.target.value)} placeholder="Explain this step..." />
                </div>
                <div>
                  <span style={S.label}>Code Block (optional)</span>
                  <textarea style={{ ...S.input, minHeight: 56, resize: "vertical", fontFamily: "monospace", fontSize: 12 }} value={section.code ?? ""} onChange={(e) => setSection(idx, "code", e.target.value)} placeholder="npm install" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, cursor: "pointer" }}>
          <input type="checkbox" checked={doc.published} onChange={(e) => setField("published", e.target.checked)} />
          Published
        </label>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button type="button" style={{ ...S.btnPrimary, opacity: saving ? 0.7 : 1 }} onClick={handleSave} disabled={saving}>
          <Save size={14} /> {saving ? "Saving…" : "Save Doc"}
        </button>
        <button type="button" style={S.btnGhost} onClick={onCancel}>
          <X size={14} /> Cancel
        </button>
      </div>
    </div>
  );
}

// ─── Dashboard ───────────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<"blog" | "docs">("blog");
  const [posts, setPosts] = useState<IBlogPost[]>([]);
  const [docs, setDocs] = useState<IDoc[]>([]);
  const [editingPost, setEditingPost] = useState<Partial<IBlogPost> | null>(null);
  const [editingDoc, setEditingDoc] = useState<Partial<IDoc> | null>(null);
  const [isNew, setIsNew] = useState(false);
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

  async function savePost(data: Partial<IBlogPost> & { coverImageBase64?: string }) {
    setSaving(true);
    await fetch("/api/admin/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSaving(false);
    setEditingPost(null);
    fetchPosts();
    flash("Blog post saved!");
  }

  async function deletePost(slug: string) {
    if (!confirm("Delete this post permanently?")) return;
    await fetch("/api/admin/blog", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    fetchPosts();
    flash("Post deleted.");
  }

  async function saveDoc(data: Partial<IDoc>) {
    setSaving(true);
    await fetch("/api/admin/docs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSaving(false);
    setEditingDoc(null);
    fetchDocs();
    flash("Doc saved!");
  }

  async function deleteDoc(slug: string) {
    if (!confirm("Delete this doc permanently?")) return;
    await fetch("/api/admin/docs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    fetchDocs();
    flash("Doc deleted.");
  }

  return (
    <div style={{ minHeight: "100vh", background: "rgb(var(--background))", color: "rgb(var(--foreground))" }}>
      {/* Top bar */}
      <div style={{ borderBottom: "1px solid rgb(var(--border))", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56, position: "sticky", top: 0, background: "rgb(var(--background))", zIndex: 10 }}>
        <span style={{ fontWeight: 700, fontSize: 15 }}>MediStore Admin</span>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {msg && <span style={{ fontSize: 13, color: "rgb(var(--primary))", fontWeight: 600 }}>✓ {msg}</span>}
          <button type="button" style={S.btnGhost} onClick={logout}>
            <LogOut size={14} /> Logout
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 24px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
          {(["blog", "docs"] as const).map((t) => (
            <button key={t} type="button" onClick={() => { setTab(t); setEditingPost(null); setEditingDoc(null); }} style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "8px 18px", borderRadius: 8, border: "1px solid rgb(var(--border))", background: tab === t ? "rgb(var(--primary))" : "transparent", color: tab === t ? "rgb(var(--primary-foreground))" : "rgb(var(--foreground))", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
              {t === "blog" ? <FileText size={15} /> : <BookOpen size={15} />}
              {t === "blog" ? `Blog Posts (${posts.length})` : `Docs (${docs.length})`}
            </button>
          ))}
        </div>

        {/* ── BLOG ── */}
        {tab === "blog" && (
          <div style={{ display: "grid", gap: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Blog Posts</h1>
              {!editingPost && (
                <button type="button" style={S.btnPrimary} onClick={() => { setIsNew(true); setEditingPost(emptyPost()); }}>
                  <Plus size={15} /> New Post
                </button>
              )}
            </div>

            {editingPost && (
              <div style={S.card}>
                <h2 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700 }}>
                  {isNew ? "New Blog Post" : `Editing: ${editingPost.title}`}
                </h2>
                <BlogEditor
                  initial={editingPost}
                  onSave={savePost}
                  onCancel={() => { setEditingPost(null); setIsNew(false); }}
                  saving={saving}
                />
              </div>
            )}

            {!editingPost && posts.length === 0 && (
              <div style={{ ...S.card, textAlign: "center", padding: 48, opacity: 0.5 }}>
                No blog posts yet. Click &quot;New Post&quot; to create one.
              </div>
            )}

            {!editingPost && posts.map((post) => (
              <div key={post.slug} style={{ ...S.card, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  {post.coverImage && (
                    <Image src={post.coverImage} alt="cover image" style={{ width: 72, height: 52, objectFit: "cover", borderRadius: 6, flexShrink: 0 }} />
                  )}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <p style={{ margin: 0, fontWeight: 700 }}>{post.title}</p>
                      {!post.published && (
                        <span style={{ fontSize: 11, padding: "2px 7px", borderRadius: 4, background: "rgb(var(--muted))", opacity: 0.6 }}>Draft</span>
                      )}
                    </div>
                    <p style={{ margin: 0, fontSize: 12, opacity: 0.55 }}>
                      {post.category} · {post.date} · /blog/{post.slug}
                    </p>
                    <p style={{ margin: "5px 0 0", fontSize: 13, opacity: 0.7 }}>{post.description}</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                  <button type="button" style={S.btnGhost} onClick={() => { setEditingPost(post); setIsNew(false); }}>
                    <Pencil size={13} /> Edit
                  </button>
                  <button type="button" style={S.btnDanger} onClick={() => deletePost(post.slug)}>
                    <Trash2 size={13} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── DOCS ── */}
        {tab === "docs" && (
          <div style={{ display: "grid", gap: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Documentation</h1>
              {!editingDoc && (
                <button type="button" style={S.btnPrimary} onClick={() => { setIsNew(true); setEditingDoc(emptyDoc()); }}>
                  <Plus size={15} /> New Doc
                </button>
              )}
            </div>

            {editingDoc && (
              <div style={S.card}>
                <h2 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700 }}>
                  {isNew ? "New Doc Page" : `Editing: ${editingDoc.title}`}
                </h2>
                <DocEditor
                  initial={editingDoc}
                  onSave={saveDoc}
                  onCancel={() => { setEditingDoc(null); setIsNew(false); }}
                  saving={saving}
                />
              </div>
            )}

            {!editingDoc && docs.length === 0 && (
              <div style={{ ...S.card, textAlign: "center", padding: 48, opacity: 0.5 }}>
                No docs yet. Click &quot;New Doc&quot; to create one.
              </div>
            )}

            {!editingDoc && docs.map((doc) => (
              <div key={doc.slug} style={{ ...S.card, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <p style={{ margin: 0, fontWeight: 700 }}>{doc.title}</p>
                    {!doc.published && (
                      <span style={{ fontSize: 11, padding: "2px 7px", borderRadius: 4, background: "rgb(var(--muted))", opacity: 0.6 }}>Draft</span>
                    )}
                  </div>
                  <p style={{ margin: 0, fontSize: 12, opacity: 0.55 }}>
                    {doc.sections.length} sections · order {doc.order} · /docs/{doc.slug}
                  </p>
                  <p style={{ margin: "5px 0 0", fontSize: 13, opacity: 0.7 }}>{doc.description}</p>
                </div>
                <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                  <button type="button" style={S.btnGhost} onClick={() => { setEditingDoc(doc); setIsNew(false); }}>
                    <Pencil size={13} /> Edit
                  </button>
                  <button type="button" style={S.btnDanger} onClick={() => deleteDoc(doc.slug)}>
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