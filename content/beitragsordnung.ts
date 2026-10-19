import { clubInfo } from "./club";

export interface BeitragsKlasse {
  klasse: string;
  mitgliedsform: string;
  beitrag: string;
  highlight?: boolean;
}

export interface BeitragsSection {
  id: string;
  paragraph: string;
  title: string;
  shortTitle: string;
  paragraphs?: string[];
  bullets?: string[];
  hasTable?: boolean;
}

export const beitragsordnungMeta = {
  subtitle: "des Vereins Elitestudiengang Software Engineering Alumni e.V. (nachfolgend Verein genannt)",
  stand: "München, den 11.06.2019",
  pdfUrl: clubInfo.downloads.beitragsordnung,
};

export const beitragsKlassen: BeitragsKlasse[] = [
  {
    klasse: "01",
    mitgliedsform: "Immatrikulierte Studierende (Ordentliches Mitglied, ermäßigt)",
    beitrag: "EUR 0,-",
    highlight: true,
  },
  {
    klasse: "02",
    mitgliedsform: "Ehemalige Studierende (Ordentliches Mitglied)",
    beitrag: "EUR 50,-",
    highlight: true,
  },
  {
    klasse: "03",
    mitgliedsform: "Fördernde Mitglieder",
    beitrag: "individuell",
  },
  {
    klasse: "04",
    mitgliedsform: "Ehrenmitglieder",
    beitrag: "EUR 0,-",
  },
];

export const beitragsSections: BeitragsSection[] = [
  {
    id: "p1",
    paragraph: "§ 1",
    title: "§ 1 Grundsatz",
    shortTitle: "Grundsatz",
    paragraphs: [
      "Diese Beitrags- und Kassenordnung ist nicht Bestandteil der Satzung. Sie regelt die Beitragsverpflichtungen der Mitglieder. Sie kann nur von der Mitgliederversammlung des Vereins geändert werden.",
    ],
  },
  {
    id: "p2",
    paragraph: "§ 2",
    title: "§ 2 Beschlüsse",
    shortTitle: "Beschlüsse",
    paragraphs: [
      "Alle Vereinsmitglieder zahlen einen Mitgliedsbeitrag. Der Mitgliedsbeitrag wird jährlich zum 01.01. erhoben.",
      "Die festgesetzten Beträge werden zum 1. Januar des folgenden Jahres erhoben, in dem der Beschluss gefasst wurde. Durch Beschluss der Mitgliederversammlung kann auch ein anderer Termin festgelegt werden.",
    ],
  },
  {
    id: "p3",
    paragraph: "§ 3",
    title: "§ 3 Beiträge",
    shortTitle: "Beiträge",
    hasTable: true,
    bullets: [
      "Der Mitgliedsbeitrag des laufenden Jahres wird jährlich zum 31. Januar fällig und per Lastschrift eingezogen. Entstehen dem Verein Kosten durch eine nicht erfolgreiche Lastschrift, sind diese von dem Mitglied zu tragen.",
      "Der Verein erhebt keine Aufnahmegebühr.",
      "Bei unterjährigem Eintritt wird der volle Mitgliedsbeitrag des Eintrittsjahres zum Eintrittsdatum fällig.",
      "Die Höhe des jährlichen Beitrags eines fördernden Mitglieds wird bei dessen Aufnahme durch Vorstandsbeschluss individuell festgelegt und kann durch die Mitgliederversammlung geändert werden.",
    ],
  },
  {
    id: "p4",
    paragraph: "§ 4",
    title: "§ 4 Vereinskonto",
    shortTitle: "Vereinskonto",
    paragraphs: [
      "Das Vereinskonto wird nach Gründung zeitnah von dem/der Kassierer/in mitgeteilt. Die Zahlungen des Gründungsjahres 2019 sind (anders als in §3,3 geregelt) frühestens fällig ab Mitteilung.",
    ],
  },
];
