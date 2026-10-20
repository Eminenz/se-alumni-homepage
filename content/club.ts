export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const clubInfo = {
  name: "Elitestudiengang Software Engineering Alumni e.V.",
  legalNameWithoutEv: "Elitestudiengang Software Engineering Alumni",
  shortName: "SE Alumni e.V.",
  siteUrl: "https://www.se-alumni.de",
  domain: "se-alumni.de",
  email: "vorstand@se-alumni.de",
  mailto: "mailto:vorstand@se-alumni.de",
  logoUrl: `${BASE_PATH}/images/logo.png`,
  heroLogoUrl: `${BASE_PATH}/images/hero-logo.jpg`,
  address: {
    careOf: "c/o Qplix GmbH",
    street: "Nußbaumstraße 12",
    zipCity: "80336 München",
  },
  register: {
    court: "Amtsgericht München",
    number: "VR 208695",
  },
  responsiblePerson: "Philip Schäfer",
  bank: {
    iban: "DE94 8306 5408 0004 2810 98",
    bic: "GENODEF1SLR",
  },
  membershipFees: {
    students: "0 €",
    studentsFormatted: "0,- EUR",
    alumni: "50 €",
    alumniFormatted: "50,- EUR",
    guestSeminarFee: "35 €",
  },
  membershipBenefits: [
    "Kostenlose Teilnahme am jährlichen Alumni-Seminar",
    "Vernetzung und Austausch zwischen Studierenden und Absolventen",
    "Stimmrecht in der Mitgliederversammlung",
    "Förderung von Studierenden (z.B. Deutschlandstipendium)",
  ],
  stipendium: {
    university: "Universität Augsburg",
    period: "01.10.2024 - 30.09.2025",
    image: `${BASE_PATH}/images/deutschlandstipendium.jpg`,
  },
  downloads: {
    aufnahmeantrag: `${BASE_PATH}/downloads/aufnahmeantrag.pdf`,
    satzung: `${BASE_PATH}/downloads/vereinssatzung.pdf`,
    beitragsordnung: `${BASE_PATH}/downloads/beitragsordnung.pdf`,
  },
} as const;
