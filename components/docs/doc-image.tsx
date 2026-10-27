"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Plain <img> so you can use Unsplash now and /public or Cloudinary screenshots later.
 *  If an image fails to load, a soft gradient is shown instead of a broken icon. */
export function DocImage({
  src,
  alt,
  caption,
  aspect = "aspect-[16/9]",
  priority,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  priority?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={cn("my-6", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--muted))]",
          aspect,
        )}
      >
        {failed ? (
          <div
            className="flex h-full w-full items-center justify-center text-[rgb(var(--primary))]"
            style={{
              background:
                "linear-gradient(135deg, rgb(var(--primary) / 0.2), rgb(var(--primary) / 0.04))",
            }}
          >
            <ImageIcon size={36} />
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs opacity-60">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
