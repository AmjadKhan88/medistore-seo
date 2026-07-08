"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pill } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      setError("Wrong password. Try again.");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(var(--background))",
        padding: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          border: "1px solid rgb(var(--border))",
          borderRadius: "12px",
          padding: "40px",
          background: "rgb(var(--background))",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
          <span
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              background: "rgb(var(--primary) / 0.14)",
              color: "rgb(var(--primary))",
            }}
          >
            <Pill size={20} />
          </span>
          <div>
            <p style={{ fontWeight: 700, margin: 0 }}>MediStore Admin</p>
            <p style={{ fontSize: 12, margin: 0, opacity: 0.6 }}>Content Dashboard</p>
          </div>
        </div>

        <label style={{ display: "block", fontSize: 14, fontWeight: 500, marginBottom: 6 }}>
          Admin Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          placeholder="Enter password"
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid rgb(var(--border))",
            background: "rgb(var(--muted))",
            color: "rgb(var(--foreground))",
            fontSize: 14,
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        {error && (
          <p style={{ color: "#e55", fontSize: 13, marginTop: 8 }}>{error}</p>
        )}
        <button
          type="button"
          onClick={handleLogin}
          disabled={loading}
          style={{
            marginTop: 16,
            width: "100%",
            padding: "11px",
            borderRadius: "8px",
            border: "none",
            background: "rgb(var(--primary))",
            color: "rgb(var(--primary-foreground))",
            fontWeight: 600,
            fontSize: 14,
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Logging in…" : "Login"}
        </button>
      </div>
    </div>
  );
}