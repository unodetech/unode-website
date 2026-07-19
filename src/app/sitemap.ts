import type { MetadataRoute } from "next";

/* ----------------------------------------------------------------------
 * sitemap.xml — emitted as a static file under `output: 'export'`.
 *
 * Every route has an English and an Arabic mirror; each entry lists its
 * hreflang alternates so search engines pair them correctly. URLs match
 * the canonical form declared in each page's metadata (no trailing slash).
 * -------------------------------------------------------------------- */

const BASE_URL = "https://unode.tech";

/* Required so the route emits a static sitemap.xml under output: 'export'. */
export const dynamic = "force-static";

type Pair = {
  /** Path without locale prefix, e.g. "/services" ("" for home). */
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const PAIRS: Pair[] = [
  { path: "", changeFrequency: "monthly", priority: 1.0 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/studio", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/work/amlakey", changeFrequency: "monthly", priority: 0.8 },
  { path: "/work/masar-qiyas", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PAIRS.flatMap(({ path, changeFrequency, priority }) => {
    const enUrl = `${BASE_URL}${path}`;
    const arUrl = `${BASE_URL}/ar${path}`;
    const languages = { en: enUrl, ar: arUrl, "x-default": enUrl };

    return [
      {
        url: enUrl,
        lastModified,
        changeFrequency,
        priority,
        alternates: { languages },
      },
      {
        url: arUrl,
        lastModified,
        changeFrequency,
        priority,
        alternates: { languages },
      },
    ];
  });
}
