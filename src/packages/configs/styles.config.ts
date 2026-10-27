/**
 * styles.config.ts
 * --------------------------------------------------------------
 * Registry of the visual themes under styles/themes/{color-themes,custom-themes}.
 * `name` MUST exactly match the file name and the `[data-theme="<name>"]`
 * selector scripts/build-themes.ts generates from it.
 */
export type StyleTheme = {
  name: string;
  label: string;
  type: "custom-theme" | "color-theme";
  description: string;
};

export const STYLE_THEMES = [
  {
    name: "cosmic-night",
    label: "Cosmic Night",
    type: "custom-theme",
    description: "A cosmic dark theme",
  },
  {
    name: "cyantrix-theme",
    label: "Cyantrix",
    type: "custom-theme",
    description: "A cyan/teal tech theme",
  },
  {
    name: "ironman-theme",
    label: "Iron Man",
    type: "custom-theme",
    description: "Red and gold armor palette",
  },
  {
    name: "velocity-theme",
    label: "Velocity",
    type: "custom-theme",
    description: "A high-contrast, fast-feeling palette",
  },
  {
    name: "amber-theme",
    label: "Amber",
    type: "color-theme",
    description: "A soft amber theme",
  },
  {
    name: "emerald-theme",
    label: "Emerald",
    type: "color-theme",
    description: "A soft emerald theme",
  },
  {
    name: "mono-theme",
    label: "Mono",
    type: "color-theme",
    description: "A monochrome theme",
  },
  {
    name: "rose-theme",
    label: "Rose",
    type: "color-theme",
    description: "A soft rose theme",
  },
  {
    name: "sky-theme",
    label: "Sky",
    type: "color-theme",
    description: "A soft sky theme",
  },
  {
    name: "slate-theme",
    label: "Slate",
    type: "color-theme",
    description: "A soft slate theme",
  },
  {
    name: "stone-theme",
    label: "Stone",
    type: "color-theme",
    description: "A soft stone theme",
  },
  {
    name: "teal-theme",
    label: "Teal",
    type: "color-theme",
    description: "A soft teal theme",
  },
  {
    name: "violet-theme",
    label: "Violet",
    type: "color-theme",
    description: "A soft violet theme",
  },
  {
    name: "zinc-theme",
    label: "Zinc",
    type: "color-theme",
    description: "A soft zinc theme",
  },
] as const satisfies readonly StyleTheme[];

export type StyleThemeName = (typeof STYLE_THEMES)[number]["name"];

export const STYLES_THEME_NAMES = STYLE_THEMES.map((theme) => theme.name) as [
  StyleThemeName,
  ...StyleThemeName[],
];

export const getStyleTheme = (name: StyleThemeName): StyleTheme => {
  const theme = STYLE_THEMES.find((t) => t.name === name);
  if (!theme) {
    throw new Error(
      `Unknown theme "${name}". Register it in styles.config.ts first.`,
    );
  }
  return theme;
};
