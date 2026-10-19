# Elitestudiengang Software Engineering Alumni e.V. – Webseite

Willkommen im offiziellen Repository der Vereinswebseite des **Elitestudiengang Software Engineering Alumni e.V.**

- **Live-Webseite:** [https://www.se-alumni.de](https://www.se-alumni.de)
- **Kontakt:** [vorstand@se-alumni.de](mailto:vorstand@se-alumni.de)

---

## Überblick

Diese Webseite vernetzt aktive Studierende und Absolventinnen sowie Absolventen (Alumni) des Elitestudiengangs Software Engineering (Universität Augsburg, TU München, LMU München) im Rahmen des Elitenetzwerks Bayern. Sie informiert über den Verein, die Mitgliedschaft, das jährliche Alumni-Seminar, das geförderte Deutschlandstipendium sowie die Vereinssatzung und Beitragsordnung.

Technisch basiert das Projekt auf **Next.js 14 (App Router)** mit **TypeScript** und **Tailwind CSS**. Durch den statischen Export (`output: 'export'`) wird die Seite aktuell wartungsfrei und kostenlos über **GitHub Pages** ausgeliefert, ist aber zu 100 % vorbereitet für einen späteren Wechsel auf **Vercel** (z. B. für digitale Mitgliedsanträge oder einen internen Mitgliederbereich).

---

## Schnellstart (Lokale Entwicklung & Build)

Voraussetzung ist eine aktuelle **Node.js LTS-Version (v20+)** sowie `npm`.

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Lokalen Entwicklungsserver starten (http://localhost:3000)
npm run dev

# 3. Statischen Produktions-Build erzeugen (Ausgabe im Ordner ./out)
npm run build

# 4. TypeScript- und Linting-Prüfung ausführen
npx tsc --noEmit
npm run lint
```

---

## Häufige Pflege-Aufgaben (Single Source of Truth in `content/`)

Alle vereinsrelevanten Daten, Texte und Dokumente sind zentral im Verzeichnis [`content/`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/) als typisierte TypeScript-Dateien abgelegt. **Es müssen keine React-Komponenten bearbeitet werden, um Inhalte zu aktualisieren.**

### 1. Neues Alumni-Treffen / Seminar eintragen
- **Datei:** [`content/events.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/events.ts)
- **Vorgehen:**
  - Für ein **kommendes Event** das Feld `upcomingAnnouncement` anpassen oder ein neues Objekt am Anfang des `events`-Arrays mit `isUpcoming: true` eintragen.
  - Nach Abschluss des Seminars `isUpcoming: false` setzen und Agenda, Keynote sowie Organisatoren für die Chronik ergänzen.

### 2. Vorstand nach Mitgliederversammlung aktualisieren
- **Dateien:** [`content/board.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/board.ts) & ggf. [`content/club.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/club.ts)
- **Vorgehen:**
  - In [`content/board.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/board.ts) Namen, Rollen (`1. Vorstand`, `2. Vorstand`, `Kassier`, `Kassenprüfer`), LinkedIn-Profile und Fotos (unter `public/images/board/`) anpassen.
  - **Wichtig:** Über das Flag `isVertretungsberechtigt: true` (und `impressumRole`) werden sowohl die **Startseite** als auch das **Impressum** automatisch synchronisiert!
  - Falls sich die für den Inhalt verantwortliche Person (§ 55 Abs. 2 RStV) oder die `c/o`-Geschäftsstellenadresse ändert, diese in [`content/club.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/club.ts) aktualisieren.

### 3. Vereinsdaten, Beiträge oder Deutschlandstipendium ändern
- **Datei:** [`content/club.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/club.ts)
- **Vorgehen:**
  - Bankverbindung (`iban`, `bic`), Anschrift (`address`), Registereintrag (`registerCourt`, `registerNumber`), Mitgliedsbeiträge (`fees`) oder den aktuellen Förderzeitraum des Deutschlandstipendiums (`stipendium`) direkt in `clubInfo` ändern.
  - Alle Änderungen wirken sich sofort auf Footer, Startseite, Mitgliedschafts-Seite, Impressum, Datenschutz und Widerrufsbelehrung aus.

### 4. Satzung, Beitragsordnung oder PDF-Downloads aktualisieren
- **Dateien:** [`content/satzung.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/satzung.ts), [`content/beitragsordnung.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/beitragsordnung.ts) sowie `public/downloads/`
- **Vorgehen:**
  - Bei Satzungs- oder Beitragsordnungsänderungen den Paragraphentext in [`content/satzung.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/satzung.ts) bzw. [`content/beitragsordnung.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/beitragsordnung.ts) anpassen.
  - Die aktualisierten PDF-Dateien unter exakt denselben standardisierten Dateinamen in `public/downloads/` ablegen:
    - `public/downloads/aufnahmeantrag.pdf`
    - `public/downloads/vereinssatzung.pdf`
    - `public/downloads/beitragsordnung.pdf`

---

## Projektstruktur

```text
se-alumni-homepage/
├── app/                  # Next.js App Router Seiten & globales Layout
│   ├── verein/           # Unterseiten: Mitgliedschaft, Satzung, Beitragsordnung
│   ├── veranstaltungen/  # Alumni-Seminar Ankündigung & Chronik (2018–heute)
│   ├── impressum/        # Automatisch aus content/club.ts & content/board.ts gespeist
│   ├── datenschutz/      # DSGVO-Datenschutzerklärung
│   ├── widerruf/         # Widerrufsbelehrung
│   └── cookie-einstellungen/
├── components/           # Wiederverwendbare UI-Komponenten (Header, Footer, BoardSection, CtaBanner)
├── content/              # Single Source of Truth für alle Vereinsdaten & Texte
│   ├── club.ts           # Stammdaten, Adresse, IBAN, Beiträge, PDF-Pfade, Stipendium
│   ├── board.ts          # Vorstandsmitglieder & Kassenprüfer (inkl. Impressum-Steuerung)
│   ├── events.ts         # Alumni-Seminare & Chronik (2018–2024+)
│   ├── satzung.ts        # Vollständiger Wortlaut der Vereinssatzung (§§ 1–15)
│   ├── beitragsordnung.ts# Vollständiger Wortlaut der Beitrags- und Kassenordnung (§§ 1–4)
│   └── navigation.ts     # Zentrale Menüstruktur für Header & Footer
├── public/               # Statische Assets
│   ├── downloads/        # Offizielle PDFs (aufnahmeantrag.pdf, vereinssatzung.pdf, beitragsordnung.pdf)
│   ├── images/           # Vereinslogo, Vorstands-Porträts, Banner-Bilder
│   └── CNAME             # Custom-Domain-Konfiguration (se-alumni.de) für GitHub Pages
└── _agents/              # Architekturdokumentation, Wartungshandbuch & Bestandsaufnahme
```

---

## Weiterführende Dokumentation (`_agents/`)

Für Vorstandsmitglieder, Entwickler und KI-Assistenten stehen im Ordner [`_agents/`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/_agents/) detaillierte Handbücher bereit:

- [**`_agents/MAINTENANCE.md`**](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/_agents/MAINTENANCE.md) – Schritt-für-Schritt-Playbook mit Code-Beispielen für alle wiederkehrenden Pflegeaufgaben (Vorstandswahl, Alumni-Seminar, PDF-Austausch, Design-Leitlinien).
- [**`_agents/PLAN.md`**](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/_agents/PLAN.md) – Masterplan und Roadmap von der Jimdo-Ablösung über das Maintainability-Revamp bis zur zukünftigen Vercel-Migration.
- [**`_agents/TECHSTACK.md`**](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/_agents/TECHSTACK.md) – Technische Dokumentation zu Next.js 14 Static Export, Tailwind Design-Tokens, DSGVO-konformen lokalen Schriften (`next/font/google`) und CI/CD.
- [**`_agents/SCRAPED_INVENTORY.md`**](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/_agents/SCRAPED_INVENTORY.md) – Dokumentierter Originalbestand der ehemaligen Jimdo-Seite inkl. Asset-Zuordnung und Seminar-Historie (2018–2024).
