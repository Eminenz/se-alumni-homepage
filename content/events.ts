export interface AlumniEvent {
  year: string;
  title: string;
  date?: string;
  location?: string;
  locationDetails?: string;
  locationLink?: string;
  keynote?: string;
  organizers?: string;
  organizerInstitution?: string;
  costs?: string;
  note?: string;
  agenda?: { time: string; title: string; speaker?: string }[];
  isUpcoming?: boolean;
}

export const upcomingEventBanner = {
  title: "Save the Date: Alumni-Seminar am Samstag, 21. November 2026 in München",
  subtitle:
    "Gestaltet das Programm mit! Wir suchen kurze und längere Vorträge aus Industrie und Forschung sowie spontane Lightning Talks (5–10 Minuten) – von technischen Deep Dives und Projektberichten bis hin zu Erfahrungen aus Gründung, Karriere oder Promotion.",
  contactEmail: "alumniseminar-orga@maximilianherrmann.de",
  buttonText: "Mehr erfahren",
  buttonHref: "/veranstaltungen/",
};

const backstageCosts =
  "Da das Alumni-Seminar aus den Mitgliedsbeiträgen des Vereins finanziert wird, ist die Veranstaltung für Mitglieder selbstverständlich kostenlos. Nicht-Mitglieder haben die Möglichkeit vor Ort Mitglied zu werden. Für Studenten beträgt der jährliche Mitgliedsbeitrag 0€, für Alumni 50€. Wer dennoch dem Verein nicht beitreten möchte, wird einen Unkostenbeitrag von circa 35€ bezahlen müssen.";

export const events: AlumniEvent[] = [
  {
    year: "2024",
    title: "Alumni Seminar 2024",
    date: "14.09.2024",
    location: "Backstage",
    locationDetails: "Reitknechtstr. 6 (ehemals Wilhelm-Hale-Str. 38), 80639 München (Nähe Hirschgarten)",
    locationLink: "https://backstage.eu/infos/anfahrt.html",
    keynote: "Dr. Nian-Ze Lee, Postdoctoral Researcher SoSy Lab LMU",
    organizers: "Michelle (12. JG), Henrik (14. JG), Sebastian (17. JG)",
    organizerInstitution: "Elitestudiengang Software Engineering Alumni",
    costs: backstageCosts,
    isUpcoming: false,
    agenda: [
      {
        time: "15:00 Uhr",
        title: "Welcome & Check-In (für Vereinsmitglieder und alle, die es werden wollen)",
      },
      {
        time: "15:30 Uhr",
        title: "Mitgliederversammlung Alumni-Verein",
      },
      {
        time: "17:00 Uhr",
        title: "Welcome & Check-In aka offizielle Begrüßung zum Alumni-Seminar (Vereinsmitglieder und Nicht-Mitglieder)",
      },
      {
        time: "17:30 Uhr",
        title: "Keynote",
        speaker: "Dr. Nian-Ze Lee, Postdoctoral Researcher SoSy Lab LMU",
      },
      {
        time: "18:30 Uhr",
        title: "Mini Konferenz",
      },
      {
        time: "20:00 Uhr",
        title: "Networking",
      },
      {
        time: "bis 01:00 Uhr",
        title: "Ausklang",
      },
    ],
  },
  {
    year: "2023",
    title: "Alumni Seminar 2023",
    date: "09.09.2023",
    location: "Backstage",
    locationDetails: "Reitknechtstr. 6 (ehemals Wilhelm-Hale-Str. 38), 80639 München (Nähe Hirschgarten)",
    locationLink: "https://backstage.eu/infos/anfahrt.html",
    keynote: "Dr. Alexander Wischnewski, MD & Co-Founder driveblocks",
    organizers: "Peter (1. JG), Michelle (12. JG), Tobias (12. JG), Dat (15. JG)",
    organizerInstitution: "Elitestudiengang Software Engineering Alumni",
    costs: backstageCosts,
    isUpcoming: false,
    agenda: [
      {
        time: "15:00 Uhr",
        title: "Welcome & Check-In (für Vereinsmitglieder und alle, die es werden wollen)",
      },
      {
        time: "15:30 Uhr",
        title: "Mitgliederversammlung Alumni-Verein",
      },
      {
        time: "16:30 Uhr",
        title: "Welcome & Check-In aka offizielle Begrüßung zum Alumni-Seminar (Vereinsmitglieder und Nicht-Mitglieder)",
      },
      {
        time: "17:00 Uhr",
        title: "Keynote",
        speaker: "Dr. Alexander Wischnewski, MD & Co-Founder driveblocks",
      },
      {
        time: "18:00 Uhr",
        title: "Open-Space Konferenz",
      },
      {
        time: "20:00 Uhr",
        title: "Networking",
      },
      {
        time: "bis 01:00 Uhr",
        title: "Ausklang",
      },
    ],
  },
  {
    year: "2022",
    title: "Alumni Seminar 2022",
    date: "03.09.2022",
    location: "Backstage",
    locationDetails: "Reitknechtstr. 6 (ehemals Wilhelm-Hale-Str. 38), 80639 München (Nähe Hirschgarten)",
    locationLink: "https://backstage.eu/infos/anfahrt.html",
    keynote: "Federico Tessmann, COO & Co-Founder algoriddim GmbH",
    organizers: "Peter (1. JG), Chris (6. JG), Felix (8. JG), Flo (8. JG)",
    organizerInstitution: "Elitestudiengang Software Engineering Alumni",
    costs: backstageCosts,
    isUpcoming: false,
    agenda: [
      {
        time: "15:00 Uhr",
        title: "Welcome & Check-In (für Vereinsmitglieder und alle, die es werden wollen)",
      },
      {
        time: "15:30 Uhr",
        title: "Mitgliederversammlung Alumni-Verein",
      },
      {
        time: "16:30 Uhr",
        title: "Welcome & Check-In aka offizielle Begrüßung zum Alumni-Seminar (Vereinsmitglieder und Nicht-Mitglieder)",
      },
      {
        time: "17:00 Uhr",
        title: "Keynote",
        speaker: "Federico Tessmann, COO & Co-Founder algoriddim GmbH",
      },
      {
        time: "17:45 Uhr",
        title: "Snacks und Q&A",
      },
      {
        time: "18:30 Uhr",
        title: "Kurzvorträge",
      },
      {
        time: "19:00 Uhr",
        title: "strukturiertes Networking",
      },
      {
        time: "20:00 Uhr",
        title: "offizielles Ende des Alumni-Seminars",
      },
      {
        time: "bis 01:00 Uhr",
        title: "Ausklang",
      },
    ],
  },
  {
    year: "2021",
    title: "Alumni Seminar 2021",
    date: "04.09.2021",
    location: "Backstage",
    locationDetails: "Reitknechtstr. 6 (ehemals Wilhelm-Hale-Str. 38), 80639 München (Nähe Hirschgarten)",
    locationLink: "https://backstage.info/anfahrtbs",
    keynote: "Bastian Nominacher, Co-CEO von celonis",
    organizers: "Philipp (1. Jg), Philip (8. Jg), Pascal (9. Jg), Lukas (10. Jg), Karola (9. Jg)",
    organizerInstitution: "Elitestudiengang Software Engineering Alumni",
    costs: backstageCosts,
    isUpcoming: false,
    agenda: [
      {
        time: "15:00",
        title: "Welcome & Check-In (für Vereinsmitglieder und alle, die es werden wollen)",
      },
      {
        time: "15:30",
        title: "Mitgliederversammlung Alumni-Verein",
      },
      {
        time: "16:30",
        title: "Welcome & Check-In aka offizielle Begrüßung zum Alumni-Seminar (Vereinsmitglieder und Nicht-Mitglieder)",
      },
      {
        time: "17:00",
        title: "Keynote",
        speaker: "Bastian Nominacher, Co-CEO von celonis",
      },
      {
        time: "18:00",
        title: "strukturiertes Networking",
      },
      {
        time: "19:00",
        title: "offenes Networking",
      },
      {
        time: "20:00",
        title: "offizielles Ende des Alumni-Seminars",
      },
      {
        time: "01:00",
        title: "Ausklang",
      },
    ],
  },
  {
    year: "2020",
    title: "Alumni Seminar 2020",
    location: "Online",
    note: "Das Seminar findet unter den aktuellen Umständen online statt. Alle weiteren Informationen könnt ihr den Emails entnehmen.",
    isUpcoming: false,
  },
  {
    year: "2019",
    title: "Alumni Seminar 2019",
    date: "7. Juni 2019",
    location: "Kleine Aula, Ludwig-Maximilians-Universität",
    locationDetails: "Geschwister-Scholl-Platz 1, 80539 München",
    keynote: "Agilität - der eine Hammer für alle Nägel? (Prof. Dr. Alexander Pretschner)",
    organizers: "Dr. Andreas Angerer (1. Jg.), Karola Klarl (9. Jg.), Philip Schäfer (8. Jg.), Kilian Telschig (8. Jg.)",
    organizerInstitution: "ISSE, Universität Augsburg",
    isUpcoming: false,
    agenda: [
      {
        time: "09:00",
        title: "Check-In und Frühstück",
      },
      {
        time: "09:30",
        title: "Begrüßung",
        speaker: "Organisatoren, Prof. Dr. Wolfgang Reif und Prof. Dr. Martin Wirsing",
      },
      {
        time: "10:00",
        title: "Agilität - der eine Hammer für alle Nägel?",
        speaker: "Prof. Dr. Alexander Pretschner",
      },
      {
        time: "10:45",
        title: "Networking und Kaffee",
      },
      {
        time: "11:15",
        title: "So agil, dass Scrum nach Hause gehen kann: Wie ich als Ein-Mann-Unternehmen Verwaltungssoftware für über 300 Schulen entwickle, betreibe und verkaufe",
        speaker: "Johannes Stanggassinger (9. Jg.)",
      },
      {
        time: "11:30",
        title: "Deep Work",
        speaker: "Dominik Grusemann (2. Jg.)",
      },
      {
        time: "11:45",
        title: "Internet der Dinge - was bedeutet das für Softwarearchitekturen",
        speaker: "Dr. Andreas Angerer (1. Jg.)",
      },
      {
        time: "12:00",
        title: 'Open Stage für spontane Kurzreden (Firmen-Pitch, “Was hat mir aus dem Studium zuletzt geholfen?”, SE-Witz, ...)',
      },
      {
        time: "12:30",
        title: "Mittagspause",
      },
      {
        time: "13:30",
        title: "State of the Art der Formalen Methoden in Forschung und Praxis",
        speaker: "Prof. Dr. Gidon Ernst (3. Jg.)",
      },
      {
        time: "13:45",
        title: "Agiles Projektmanagement und agile Unternehmensorganisation",
        speaker: "Dr. Axel Habermaier (3. Jg.)",
      },
      {
        time: "14:00",
        title: "Continous Delivery as a Business Advantage",
        speaker: "Mario Fernandez (1. Jg.)",
      },
      {
        time: "14:15",
        title: "Über Angst beim Gründen",
        speaker: "Dr. Maximilian Junker (3. Jg.)",
      },
      {
        time: "14:30",
        title: "Workshop zur Gründung eines SE Alumni e.V.",
      },
      {
        time: "15:30",
        title: "Networking und Kaffee",
      },
      {
        time: "16:00",
        title: "Workshop Fortsetzung und Abstimmung zur Gründung eines SE Alumni e.V.",
      },
      {
        time: "18:00",
        title: "Tagesabschluss",
      },
      {
        time: "18:30",
        title: "Aufbruch zum Atzinger (Abendveranstaltung auf eigene Rechnung)",
      },
    ],
  },
  {
    year: "2018",
    title: "Alumni Seminar 2018",
    date: "15. Juni 2018",
    location: "Kleine Aula, Ludwig-Maximilians-Universität",
    locationDetails: "Geschwister-Scholl-Platz 1, 80539 München",
    keynote: "Back to school? Warum ich von der Uni nicht genug bekommen kann (Prof. Dr. Andreas Vogelsang, 3. Jahrgang)",
    organizers: "Florian Jäger (8. Jg.), Karola Klarl (9. Jg.), André Reichstaller (8. Jg.)",
    organizerInstitution: "ISSE, Universität Augsburg",
    isUpcoming: false,
    agenda: [
      {
        time: "09:00",
        title: "Check-In",
      },
      {
        time: "09:30",
        title: "Begrüßung - Organisatoren",
        speaker: "Prof. Dr. Wolfgang Reif und Prof. Dr. Martin Wirsing",
      },
      {
        time: "10:00",
        title: "Frühstück",
      },
      {
        time: "10:30",
        title: "Back to school? Warum ich von der Uni nicht genug bekommen kann",
        speaker: "Prof. Dr. Andreas Vogelsang (3. Jahrgang)",
      },
      {
        time: "11:15",
        title: "Networking und Kaffee",
      },
      {
        time: "11:45",
        title: "Making > $200k in your first year working. (aka: Moving to and living in the San Francisco Bay Area)",
        speaker: "Dr. Henrik Mühe (3. Jg.)",
      },
      {
        time: "12:00",
        title: "Die (Puli)-Geister, die ich rief - Wie der Computer vielleicht doch noch das Notenlesen lernt.",
        speaker: "Alexander Pacha (6. Jg.)",
      },
      {
        time: "12:15",
        title: "Informelle Jobbörse",
      },
      {
        time: "12:45",
        title: "gemeinsamer Mittagsimbiss",
      },
      {
        time: "13:30",
        title: "Networking Games Session",
      },
      {
        time: "14:30",
        title: "Zivilrechtliche Regelungen im Bereich Robotik - EU Digitalisierungsplan",
        speaker: "Kilian Telschig (8. Jg.)",
      },
      {
        time: "14:45",
        title: "Eine Programmiersprache kommt selten allein",
        speaker: "Axel Habermaier (3. Jg.)",
      },
      {
        time: "15:00",
        title: "Networking und Kaffee",
      },
      {
        time: "15:30",
        title: "Von der Forschung in die Wirtschaft - ein Kulturschock?",
        speaker: "Andreas Angerer (1. Jg.)",
      },
      {
        time: "15:45",
        title: "Boy Scouts in Silicon Valley - How clean should my code be?",
        speaker: "Dominik Grusemann (2. Jg.)",
      },
      {
        time: "16:00",
        title: "Gemeinsames Brainstorming: Zukunft des Alumni-Netzwerks",
      },
      {
        time: "17:00",
        title: "Stimmungsbarometer",
      },
      {
        time: "17:30",
        title: "Aufbruch zum Schellingsalon: Braten, Bier und Billard (Abendveranstaltung auf eigene Rechnung)",
      },
    ],
  },
];
