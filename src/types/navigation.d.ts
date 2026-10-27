export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export type DropdownLink = {
  label: string;
  href: string;
};

export type DropdownCategory = {
  category: string;
  items: DropdownLink[];
};

/** Either a plain destination (`href`) or a dropdown (`dropdown`). */
export type NavTab = {
  id: string;
  title: string;
  href?: string;
  dropdown?: DropdownCategory[];
};
