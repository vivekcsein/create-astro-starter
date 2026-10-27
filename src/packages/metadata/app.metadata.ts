import { appConfig } from "../configs/app.config";

export type PageMetadata = {
  title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
};

/** Builds the values BaseLayout renders into <title>, meta, OG and Twitter tags. */
export const buildMetadata = (page: PageMetadata = {}, pathname = "/") => {
  const title = page.title
    ? appConfig.site.titleTemplate.replace("%s", page.title)
    : appConfig.site.title;
  const description = page.description ?? appConfig.site.description;
  const canonical = new URL(pathname, appConfig.site.url).toString();
  const image = page.image ?? appConfig.site.ogImage;

  return {
    title,
    description,
    canonical,
    image: image ? new URL(image, appConfig.site.url).toString() : undefined,
    noindex: page.noindex ?? false,
  };
};
