import type { NextApiRequest, NextApiResponse } from "next";
import { buildRobotsTxt } from "@/lib/seo";

/**
 * Dynamic robots.txt — served as /robots.txt via next.config rewrite.
 */
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=604800",
  );
  res.status(200).send(buildRobotsTxt());
}
