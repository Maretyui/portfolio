import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // No lastModified here on purpose - new Date() would falsely signal
      // "changed" to crawlers on every deploy, even ones with zero content
      // changes (lastModified is optional; omitting it is more honest than
      // a value that's wrong as often as it's right).
      url: "https://maretyui.com",
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
