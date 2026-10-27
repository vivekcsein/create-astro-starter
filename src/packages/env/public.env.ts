import { z } from "zod";
import { STYLES_THEME_NAMES } from "../configs/styles.config";

/**
 * The only place `import.meta.env` is read. Astro exposes only
 * PUBLIC_-prefixed variables to the browser; everything is validated
 * here so a missing/invalid value fails at build time, not at runtime.
 */
const publicEnvSchema = z.object({
  PUBLIC_APP_NAME: z.string().trim().min(1).default("create-astro-template"),
  PUBLIC_APP_VERSION: z.string().trim().default("1.0.0"),
  PUBLIC_APP_DESCRIPTION: z
    .string()
    .trim()
    .min(1)
    .default(
      "Future-ready frontend template for building robust, enterprise-level web applications.",
    ),
  PUBLIC_SITE_URL: z.url().trim().default("http://localhost:4321"),
  PUBLIC_SITE_TITLE: z
    .string()
    .trim()
    .min(1)
    .default("Astro frontend template"),
  PUBLIC_LOGO_URL: z.string().trim().default("/logo.png"),
  PUBLIC_OG_IMAGE_URL: z.string().trim().optional(),
  PUBLIC_ACTIVE_STYLE: z.enum(STYLES_THEME_NAMES).default("cyantrix-theme"),
  PUBLIC_GOOGLE_VERIFICATION: z.string().trim().optional(),

  PUBLIC_AUTHOR_NAME: z.string().trim().default("frenzzofficial"),
  PUBLIC_AUTHOR_EMAIL: z.string().trim().default(""),
  PUBLIC_TWITTER: z.string().trim().default("https://x.com/frenzzofficial"),
  PUBLIC_LINKEDIN: z
    .string()
    .trim()
    .default("https://www.linkedin.com/company/frenzz"),
  PUBLIC_GITHUB: z.string().trim().default("https://github.com/frenzzofficial"),

  PUBLIC_API_ORIGIN: z.string().trim().default("http://localhost:7164"),
  PUBLIC_API_PREFIX: z.string().trim().default("app"),
});

const parsed = publicEnvSchema.safeParse(import.meta.env);

if (!parsed.success) {
  throw new Error(`Invalid public env:\n${z.prettifyError(parsed.error)}`);
}

export const envPublicConfig = Object.freeze(parsed.data);
