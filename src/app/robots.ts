import type { MetadataRoute } from "next";

/* ----------------------------------------------------------------------
 * robots.txt — emitted as a static file under `output: 'export'`.
 * Allow everything and point crawlers at the sitemap.
 * -------------------------------------------------------------------- */

const BASE_URL = "https://unode.tech";

/* Required so the route emits a static robots.txt under output: 'export'. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
