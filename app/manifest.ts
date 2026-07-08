import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MediStore Cloud",
    short_name: "MediStore",
    description: "Medicine store management software marketing website.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafcfc",
    theme_color: "#007c74",
    icons: [{ src: "/icons/icon.svg", sizes: "512x512", type: "image/svg+xml" }]
  };
}
