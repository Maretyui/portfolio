import type { MetadataRoute } from "next"
import { SITE_TITLE, SITE_DESCRIPTION } from "./layout"

// No applicationName/appleWebApp metadata exists in layout.tsx yet, so this
// manifest is the only source these fields have — Next.js auto-serves it at
// /manifest.webmanifest and links it in <head>, no changes needed elsewhere.
// Works fine under next.config.ts's `output: 'export'` - like icon.tsx and
// apple-icon.tsx, Next prerenders this file-convention route to a static file.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_TITLE,
    short_name: "Maretyui",
    description: SITE_DESCRIPTION,
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#08080a",
    theme_color: "#08080a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      // Backs icon.tsx's generated PNG — Chrome's install-prompt criteria
      // need a real raster icon at 192x192 or larger, which the .ico above
      // alone doesn't satisfy.
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      // Separate entry (not combined into the one above - this manifest
      // type only accepts a single purpose value per icon) so Android's
      // adaptive-icon system can mask it into a circle/squircle/rounded
      // square per device instead of letterboxing it.
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
