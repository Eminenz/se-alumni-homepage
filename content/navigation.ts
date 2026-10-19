export interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

export const mainNavItems: NavItem[] = [
  {
    label: "Verein",
    children: [
      { label: "Mitgliedschaft", href: "/verein/mitgliedschaft/" },
      { label: "Satzung", href: "/verein/satzung/" },
      { label: "Beitrags- und Kassenordnung", href: "/verein/beitragsordnung/" },
    ],
  },
  {
    label: "Veranstaltungen",
    href: "/veranstaltungen/",
  },
];

export const headerCta = {
  label: "Mitglied werden",
  href: "/verein/mitgliedschaft/",
};

export const footerLegalLinks = [
  { label: "Impressum", href: "/impressum/" },
  { label: "Datenschutz", href: "/datenschutz/" },
  { label: "Cookie-Einstellungen", href: "/cookie-einstellungen/" },
];

export const footerWiderrufLink = {
  label: "Vertrag widerrufen",
  href: "/widerruf/",
};
