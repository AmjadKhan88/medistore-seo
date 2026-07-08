export function DashboardArt() {
  return (
    <div className="glass relative overflow-hidden rounded-lg p-4 shadow-2xl">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="h-3 w-28 rounded bg-[rgb(var(--primary) / 0.35)]" />
          <div className="mt-2 h-2 w-40 rounded bg-[rgb(var(--border) / 0.8)]" />
        </div>
        <div className="h-10 w-10 rounded-md bg-[rgb(var(--primary))]" />
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {["Sales", "Stock", "Expiry"].map((item, index) => (
          <div key={item} className="rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--muted) / 0.65)] p-4">
            <div className="text-xs text-[rgb(var(--foreground) / 0.62)]">{item}</div>
            <div className="mt-2 text-2xl font-bold">{index === 0 ? "$24.8k" : index === 1 ? "18,420" : "42"}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-md border border-[rgb(var(--border))] p-4">
          <div className="mb-4 h-3 w-32 rounded bg-[rgb(var(--border) / 0.8)]" />
          <div className="flex h-44 items-end gap-2">
            {[42, 65, 50, 84, 70, 94, 78, 88].map((height, index) => (
              <div key={index} className="flex-1 rounded-t bg-[rgb(var(--primary))]" style={{ height: `${height}%`, opacity: 0.45 + index * 0.05 }} />
            ))}
          </div>
        </div>
        <div className="rounded-md border border-[rgb(var(--border))] p-4">
          {["Paracetamol 500mg", "Amoxicillin 250mg", "Insulin Pen", "Cough Syrup"].map((item) => (
            <div key={item} className="mb-3 flex items-center justify-between gap-3 rounded-md bg-[rgb(var(--muted) / 0.6)] p-3 text-sm">
              <span>{item}</span>
              <span className="font-semibold text-[rgb(var(--primary))]">OK</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
