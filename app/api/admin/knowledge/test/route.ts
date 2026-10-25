import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { retrieve } from "@/lib/rag";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { query } = await req.json();
  if (typeof query !== "string" || query.trim().length < 2) {
    return NextResponse.json({ error: "Enter a question." }, { status: 400 });
  }
  try {
    // minScore 0 + onlyEnabled false → shows everything so you can tune CHAT_MIN_SCORE
    const matches = await retrieve(query.trim(), { topK: 8, minScore: 0, onlyEnabled: false });
    return NextResponse.json({ matches, threshold: Number(process.env.CHAT_MIN_SCORE || 0.55) });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Search failed" }, { status: 500 });
  }
}