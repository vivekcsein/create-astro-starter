import type { APIRoute } from "astro";
import { appConfig } from "@/packages/configs/app.config";

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", appConfig.site.url)}\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
