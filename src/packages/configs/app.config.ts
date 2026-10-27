import { envPublicConfig } from "../env/public.env";
import { themeConfig } from "./theme.config";

export const appConfig = Object.freeze({
  app: {
    name: envPublicConfig.PUBLIC_APP_NAME,
    version: envPublicConfig.PUBLIC_APP_VERSION,
    locale: "en",
    timezone: "UTC",
  },

  site: {
    url: envPublicConfig.PUBLIC_SITE_URL,
    title: envPublicConfig.PUBLIC_SITE_TITLE,
    description: envPublicConfig.PUBLIC_APP_DESCRIPTION,
    logo: envPublicConfig.PUBLIC_LOGO_URL,
    ogImage: envPublicConfig.PUBLIC_OG_IMAGE_URL,
    style: envPublicConfig.PUBLIC_ACTIVE_STYLE,
    titleTemplate: `%s | ${envPublicConfig.PUBLIC_APP_NAME}`,
  },

  author: {
    name: envPublicConfig.PUBLIC_AUTHOR_NAME,
    email: envPublicConfig.PUBLIC_AUTHOR_EMAIL,
  },

  social: {
    twitter: { name: "X", handle: envPublicConfig.PUBLIC_TWITTER },
    linkedin: { name: "LinkedIn", handle: envPublicConfig.PUBLIC_LINKEDIN },
    github: { name: "GitHub", handle: envPublicConfig.PUBLIC_GITHUB },
  },

  verification: {
    google: envPublicConfig.PUBLIC_GOOGLE_VERIFICATION,
  },

  breakpoints: { sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 },

  theme: themeConfig,

  motion: {
    duration: { instant: 100, fast: 150, base: 250, slow: 400 },
  },

  routes: {
    home: "/",
    about: "/about",
    notFound: "/404",

    services: {
      webDevelopment: "/web-development",
      backend: "/backend-development",
      performanceSeo: "/performance-seo",
      authenticationSecurity: "/authentication-security",
    },

    legal: {
      contact: "/contact",
      privacy: "/privacy",
      terms: "/terms",
    },

    system: {
      favicon: "/favicon.ico",
      logo: "/logo.png",
      robots: "/robots.txt",
      sitemap: "/sitemap.xml",
    },

    auth: {
      signIn: "/signin",
      signUp: "/signup",
      profile: "/profile",
    },
  },

  // Endpoints for the future backend — nothing calls these yet, see the
  // "TODO(api)" marker in components/features/forms/Form.astro.
  api: {
    baseUrl: `${envPublicConfig.PUBLIC_API_ORIGIN}/${envPublicConfig.PUBLIC_API_PREFIX}`,
  },

  keywords: ["astro", "typescript", "frontend", "template", "tailwindcss"],
});

export type AppConfig = typeof appConfig;
