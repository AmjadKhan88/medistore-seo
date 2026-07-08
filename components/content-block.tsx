import { Card } from "@/components/ui/card";

export function ContentBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <Card className="p-8">
          <div className="prose-site">
            <h2>{title}</h2>
            {children}
          </div>
        </Card>
      </div>
    </section>
  );
}
