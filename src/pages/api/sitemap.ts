import type { NextApiRequest, NextApiResponse } from "next";
import { buildSitemapXml, getSitemapEntries } from "@/lib/seo";

/**
 * Dynamic sitemap endpoint — served as /sitemap.xml via next.config rewrite.
 * URLs are generated from site data (services + insights), not a hand-maintained list.
 */
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const xml = buildSitemapXml(getSitemapEntries());
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400",
  );
  res.status(200).send(xml);
}
