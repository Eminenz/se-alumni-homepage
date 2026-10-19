# Scraped Site Inventory: se-alumni.de

Dieser Bericht dokumentiert alle Inhalte, Seiten, Assets, Download-Dokumente und Metadaten, die direkt von der aktuellen Jimdo-Webseite ([https://www.se-alumni.de](https://www.se-alumni.de)) extrahiert wurden.

---

## 1. Übersicht & Metadaten

- **Name des Vereins:** Elitestudiengang Software Engineering Alumni e.V.
- **Geschäftsstelle & Kontakt:**
  - c/o Qplix GmbH
  - Nußbaumstraße 12, 80336 München
  - Kontakt-E-Mail: `vorstand@se-alumni.de`
- **Bankverbindung:**
  - IBAN: `DE94 8306 5408 0004 2810 98`
  - BIC: `GENODEF1SLR`
- **Verifizierte Jimdo-Design-Einstellungen (laut Screenshot & Props):**
  - **Farbpalette (4 Blautöne):**
    1. `MainColor`: `#0e3193` (Hauptfarbe / Vereins-Blau)
    2. `SecondaryColor`: `#0849ff` (Leuchtendes Königsblau / Hover-Farbe)
    3. `Shade1`: `#6e94ff` (Hellblau / Akzent)
    4. `Shade2`: `#001d6e` (Deep Navy / Banner & Footer)
  - **Schriftarten-Paar:**
    - Überschriften: `Passion One` (400, 700)
    - Fließtext: `Source Sans 3` (400, 600, 700)
  - **Schriftgröße:** `M` (Medium / Standard)
  - **Button-Form:** `Abgerundet` (`border-radius: 5px`)
  - **Kontrastfarben:** `White` (`#FFFFFF`), `Black` (`#000000`)

---

## 2. Seiten-Struktur & Hierarchie

Die Webseite umfasst 9 Seiten, organisiert in der folgenden Struktur:

| URL-Pfad | Seitentitel | Zweck & Inhalt |
| :--- | :--- | :--- |
| `/` | **Home / Verein** | Hero-Banner, Vereinszweck, Deutschlandstipendium Förderer-Hinweis, Aktueller Vorstand, Kontakt & Bankverbindung |
| `/verein/mitgliedschaft/` | **Mitgliedschaft** | Konditionen (Studierende 0 €, Alumni 50 €/Jahr), Beitritts-Call-to-Action, Download Aufnahmeantrag |
| `/verein/satzung/` | **Satzung** | Vollständiger 12-seitiger Satzungstext als HTML + PDF-Download |
| `/verein/beitragsordnung/` *(ehem. `/verein/beitrags--und-kassenordnung/`)* | **Beitrags- & Kassenordnung** | Detaillierte Gebühren- und Kassenregelung + PDF-Download |
| `/veranstaltungen/` | **Veranstaltungen** | Übersicht & Chronik der Alumni-Treffen (2024, 2023, 2022 Backstage München, Agenda, Unkostenbeiträge, Keynote-Speaker) |
| `/impressum/` | **Impressum** | Gesetzliche Angaben, Vereinsregister, Vertretungsberechtigte |
| `/datenschutz/` | **Datenschutz** | DSGVO-Hinweise, Google Analytics Hinweise |
| `/cookie-einstellungen/` | **Cookie-Einstellungen** | Jimdo-Standard (kann im statischen Build ohne Third-Party-Tracker drastisch vereinfacht werden) |
| `/widerruf/` | **Vertrag widerrufen** | Jimdo-Standard-Pfad für Verbraucherwiderruf |

---

## 3. Vorstand & Ansprechpartner

Die extrahierten Vorstandsmitglieder und Kontakt-Links:

| Name | Rolle | Kontakt & Links |
| :--- | :--- | :--- |
| **Philip Schäfer** | 1. Vorstand | `vorstand@se-alumni.de` · [LinkedIn Profil](https://www.linkedin.com/in/philip-sch%C3%A4fer-0569b05a/) |
| **Christian Müller** | 2. Vorstand | `vorstand@se-alumni.de` · [LinkedIn Profil](https://www.linkedin.com/in/christian-a-m%C3%BCller/) |
| **Paul Lampe** | Kassier | `vorstand@se-alumni.de` · [LinkedIn Profil](https://www.linkedin.com/in/paul-lampe-3426a9225/) |
| **Alexander Dittrich** | Kassenprüfer | `vorstand@se-alumni.de` · [LinkedIn Profil](https://www.linkedin.com/in/dittrich-alexander/) |

---

## 4. Lokale Downloads & Assets

Alle Dokumente und Bilder wurden bereits lokal gesichert unter:
- Dokumente: `scraped_data/downloads/`
- Bilder: `scraped_data/images/`
- Markdown-Inhalte: `scraped_data/site_content/`
- Roh-JSON & Props: `scraped_data/`

### 4.1 Offizielle Vereins-PDFs (Rohdaten & Normalisierte Zielpfade)
Alle drei offiziellen Vereinsdokumente wurden aus der Jimdo-Seite gesichert und für den produktiven Next.js-Build unter **URL-sicheren, zeitlosen Dateinamen** in `public/downloads/` abgelegt (referenziert über `clubInfo.downloads` in [`content/club.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/club.ts)):

| Dokument | Gesicherte Originaldatei (`scraped_data/downloads/`) | Produktiver Zielpfad (`public/downloads/`) | Öffentliche URL | Größe |
| :--- | :--- | :--- | :--- | :--- |
| **Aufnahmeantrag** | `Aufnahmeantrag für Vereinsmitglieder 2023-02-26.pdf` | `public/downloads/aufnahmeantrag.pdf` | `/downloads/aufnahmeantrag.pdf` | 58.351 Bytes |
| **Beitragsordnung** | `Beitragsordnung.pdf` | `public/downloads/beitragsordnung.pdf` | `/downloads/beitragsordnung.pdf` | 63.376 Bytes |
| **Vereinssatzung** | `Vereinssatzung Webseite.pdf` | `public/downloads/vereinssatzung.pdf` | `/downloads/vereinssatzung.pdf` | 72.758 Bytes |

### 4.2 Wichtigste Bild-Assets
- **Vereins-Logo:** `9ad73315-c749-4faf-a870-3a9341baff91.png` (Transparenter SE-Alumni Logo-Header, produktiv unter `public/images/logo.png`)
- **Vorstandsfotos:**
  - Philip Schäfer: `7e93520d-6ef7-4148-9ba7-7d7ba0233535.jpg` (`public/images/board/philip-schaefer.jpg`)
  - Christian Müller: `15a48f22-5732-49f0-9d49-6ab7c8af5609.jpg` (`public/images/board/christian-mueller.jpg`)
  - Paul Lampe: `ad6b1360-861c-42c3-9889-a43204d5de8e.png` (`public/images/board/paul-lampe.png`)
  - Alexander Dittrich: `ee219889-1aca-44b1-b3c7-e20e43f567ea.png` (`public/images/board/alexander-dittrich.png`)
- **Hero- & Veranstaltungs-Banner:**
  - Hero Header: `3fee7ec5-cf0c-4bac-8aa3-72c10e2b61a9.jpg`
  - Deutschlandstipendium Feature: `053af017-1a8a-4528-8922-d9e01d96245e.jpg`
  - Backstage / Seminar Impressions: `2dc5083f-4829-4967-8a67-b766c49d73e8.jpg`, `1c81ca3a-b439-4d34-901b-e89f2ee37bb0.jpg`, etc.

---

## 5. Kerntexte & Inhalte im Detail

### 5.1 Deutschlandstipendium Förderer
> *"Wir dürfen stolz verkünden, dass unser Verein 'Elitestudiengang Software Engineering Alumni e.V.' ein **Deutschlandstipendium** an der Universität Augsburg stellen wird (Förderzeitraum 01.10.2024 - 30.09.2025)."*

### 5.2 Mitgliedschaftskonditionen
- **Studierende:** 0 € Jahresbeitrag
- **Alumni (ehemalige Studierende):** 50 € Jahresbeitrag
- Zweck: Finanzierung der Vereinstätigkeit und insbesondere der Unkosten des jährlichen Alumni-Seminars.

### 5.3 Veranstaltungen (Vollständige Historie 2018–2024)
Aus [`scraped_data/site_content/veranstaltungen.md`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/scraped_data/site_content/veranstaltungen.md) wurde die gesamte Seminar-Chronik vollständig nach [`content/events.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/events.ts) migriert:

| Jahr | Datum | Ort | Keynote / Highlights | Organisatoren | Veranstalter |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **2024** | 14.09.2024 | Backstage, München | **Keynote:** Dr. Nian-Ze Lee (Postdoctoral Researcher SoSy Lab LMU), Mitgliederversammlung, Mini Konferenz | Michelle (12. JG), Henrik (14. JG), Sebastian (17. JG) | Elitestudiengang Software Engineering Alumni |
| **2023** | 09.09.2023 | Backstage, München | **Keynote:** Dr. Alexander Wischnewski (MD & Co-Founder driveblocks), Mitgliederversammlung, Open-Space Konferenz | Peter (1. JG), Michelle (12. JG), Tobias (12. JG), Dat (15. JG) | Elitestudiengang Software Engineering Alumni |
| **2022** | 03.09.2022 | Backstage, München | **Keynote:** Federico Tessmann (COO & Co-Founder algoriddim GmbH), Mitgliederversammlung, Kurzvorträge & strukturiertes Networking | Peter (1. JG), Chris (6. JG), Felix (8. JG), Flo (8. JG) | Elitestudiengang Software Engineering Alumni |
| **2021** | 04.09.2021 | Backstage, München | **Keynote:** Bastian Nominacher (Co-CEO von Celonis), Mitgliederversammlung, strukturiertes & offenes Networking | Philipp (1. Jg), Philip (8. Jg), Pascal (9. Jg), Lukas (10. Jg), Karola (9. Jg) | Elitestudiengang Software Engineering Alumni |
| **2020** | 2020 | Online | Online-Seminar (pandemiebedingt digital durchgeführt) | – | Elitestudiengang Software Engineering Alumni |
| **2019** | 07.06.2019 | Kleine Aula, LMU München | Begrüßung Prof. Dr. Wolfgang Reif & Prof. Dr. Martin Wirsing; Vorträge von Prof. Dr. Alexander Pretschner, Johannes Stanggassinger (9. Jg.), Dominik Grusemann (2. Jg.), Dr. Andreas Angerer (1. Jg.), Prof. Dr. Gidon Ernst (3. Jg.), Dr. Axel Habermaier (3. Jg.), Mario Fernandez (1. Jg.), Dr. Maximilian Junker (3. Jg.); **Workshop & Abstimmung zur Gründung eines SE Alumni e.V.** | Dr. Andreas Angerer (1. Jg.), Karola Klarl (9. Jg.), Philip Schäfer (8. Jg.), Kilian Telschig (8. Jg.) | ISSE, Universität Augsburg |
| **2018** | 15.06.2018 | Kleine Aula, LMU München | Begrüßung Prof. Dr. Wolfgang Reif & Prof. Dr. Martin Wirsing; Vorträge von Prof. Dr. Andreas Vogelsang (3. Jg.), Dr. Henrik Mühe (3. Jg.), Alexander Pacha (6. Jg.), Kilian Telschig (8. Jg.), Axel Habermaier (3. Jg.), Andreas Angerer (1. Jg.), Dominik Grusemann (2. Jg.); Brainstorming zur Zukunft des Alumni-Netzwerks | Florian Jäger (8. Jg.), Karola Klarl (9. Jg.), André Reichstaller (8. Jg.) | ISSE, Universität Augsburg |

