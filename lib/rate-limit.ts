const hits = new Map<string, { count: number; reset: number }>();

/** In-memory limiter. Fine for one server; on Vercel/serverless use Upstash Ratelimit instead. */
export function rateLimit(key: string, limit = 15, windowMs = 60_000): boolean {
  const now = Date.now();
  if (hits.size > 5000) for (const [k, v] of hits) if (v.reset < now) hits.delete(k);
  const entry = hits.get(key);
  if (!entry || entry.reset < now) {
    hits.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  entry.count++;
  return entry.count <= limit;
}