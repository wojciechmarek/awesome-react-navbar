export interface MenuLinksProps {
  menuLinks: MenuLinks[];
}

export interface MenuLinks {
  name: string;
  subLinks: SubLink[];
  extraLinks?: ExtraLink[];
}

export interface SubLinksBoxProps {
  subLinks: SubLink[];
  extraLinks?: ExtraLink[];
}

export interface SubLink {
  name: string;
  description: string;
  link: string;
  color?: string;
  icon: JSX.Element;
}

export interface ExtraLink {
  name: string;
  link: string;
}
