# Wartungshandbuch & Playbook (`MAINTENANCE.md`)

Dieses Handbuch richtet sich an aktuelle und künftige Vorstandsmitglieder des **Elitestudiengang Software Engineering Alumni e.V.** sowie an Entwickler und KI-Agenten, die die Webseite pflegen oder erweitern.

Dank der **Single-Source-of-Truth-Architektur** im Ordner [`content/`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/) können sämtliche regulären Vereins-Updates vorgenommen werden, ohne eine einzige Zeile UI-/Komponenten-Code in `app/` oder `components/` anzufassen.

---

## 1. Checkliste nach einer Mitgliederversammlung (Vorstandswahl)

Wenn auf der jährlichen Mitgliederversammlung ein neuer Vorstand oder Kassenprüfer gewählt wird oder sich die Geschäftsstellen-Adresse ändert:

### Schritt 1.1: Neue Vorstands-Porträts ablegen
1. Quadratisches Porträtfoto (ideal: `400x400 px` bis `800x800 px`, `.jpg` oder `.png`) im Ordner `public/images/board/` speichern (z. B. `public/images/board/max-mustermann.jpg`).
2. Auf kleingeschriebene Dateinamen ohne Leerzeichen oder Umlaute achten (`ae`, `oe`, `ue`).

### Schritt 1.2: `content/board.ts` aktualisieren
Öffne [`content/board.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/board.ts) und passe die Einträge im Array `boardMembers` an:

```typescript
export const boardMembers: BoardMember[] = [
  {
    name: "Philip Schäfer",
    role: "1. Vorstand",
    impressumRole: "1. Vorsitzender",
    isVertretungsberechtigt: true, // Erscheint automatisch unter "Vertreten durch" im Impressum
    image: "/images/board/philip-schaefer.jpg",
    email: "mailto:vorstand@se-alumni.de",
    linkedin: "https://www.linkedin.com/in/philip-sch%C3%A4fer-0569b05a/",
  },
  {
    name: "Christian Müller",
    role: "2. Vorstand",
    impressumRole: "2. Vorsitzender",
    isVertretungsberechtigt: true,
    image: "/images/board/christian-mueller.jpg",
    email: "mailto:vorstand@se-alumni.de",
    linkedin: "https://www.linkedin.com/in/christian-a-m%C3%BCller/",
  },
  {
    name: "Paul Lampe",
    role: "Kassier",
    impressumRole: "Schatzmeister (Kassier)",
    isVertretungsberechtigt: true,
    image: "/images/board/paul-lampe.png",
    email: "mailto:vorstand@se-alumni.de",
    linkedin: "https://www.linkedin.com/in/paul-lampe-3426a9225/",
  },
  {
    name: "Alexander Dittrich",
    role: "Kassenprüfer",
    isVertretungsberechtigt: false, // Kassenprüfer ist nicht Vorstand i.S.d. § 26 BGB -> nicht im Impressum
    image: "/images/board/alexander-dittrich.png",
    email: "mailto:vorstand@se-alumni.de",
    linkedin: "https://www.linkedin.com/in/dittrich-alexander/",
  },
];
```

> [!IMPORTANT]
> Durch `isVertretungsberechtigt: true` und `impressumRole` wird das **Impressum** ([`app/impressum/page.tsx`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/app/impressum/page.tsx)) automatisch aktualisiert! Es gibt keine doppelte Namensliste mehr.

### Schritt 1.3: Geschäftsstelle & Verantwortlichen in `content/club.ts` prüfen
Öffne [`content/club.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/club.ts) und prüfe:
- Stimmt die `c/o`-Adresse unter `clubInfo.address` noch?
- Stimmt die nach § 55 Abs. 2 RStV verantwortliche Person (`clubInfo.responsiblePerson`, i. d. R. der 1. Vorstand)?

```typescript
// Ausschnitt aus content/club.ts
export const clubInfo = {
  // ...
  address: {
    co: "c/o Qplix GmbH",
    street: "Nußbaumstraße 12",
    zip: "80336",
    city: "München",
  },
  responsiblePerson: {
    name: "Philip Schäfer",
    addressLine: "c/o Qplix GmbH, Nußbaumstraße 12, 80336 München",
  },
  // ...
};
```

---

## 2. Checkliste für das jährliche Alumni-Seminar

Alle Veranstaltungsdaten liegen zentral in [`content/events.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/events.ts).

### Szenario A: Neues Alumni-Seminar ankündigen (Vor dem Event)
1. Öffne [`content/events.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/events.ts).
2. Passe den Ankündigungstext in `upcomingAnnouncement` an (oder füge das neue Seminar-Objekt ganz oben in `events` mit `isUpcoming: true` ein):

```typescript
// Ankündigungs-Banner auf /veranstaltungen/
export const upcomingAnnouncement = {
  headline: "Alumni-Treffen 2025",
  subtext: "Das nächste Alumni-Treffen findet am 13.09.2025 im Backstage München statt – Save the Date!",
};
```

3. Sobald Ort, Keynote und vorläufige Agenda feststehen, lege einen neuen Eintrag am Anfang des Arrays `events` an:

```typescript
export const events: AlumniEvent[] = [
  {
    year: "2025",
    title: "Alumni-Seminar 2025",
    date: "13.09.2025",
    location: "Backstage, München",
    locationDetails: "Reitknechtstr. 6 (ehemals Wilhelm-Hale-Str. 38), 80639 München (Nähe Hirschgarten)",
    locationLink: "https://backstage.eu/infos/anfahrt.html",
    keynote: "Dr. Jane Doe, CTO ExampleTech",
    organizers: "Vorname (XX. JG), Vorname (YY. JG)",
    organizerEntity: "Elitestudiengang Software Engineering Alumni",
    costs:
      "Da das Alumni-Seminar aus den Mitgliedsbeiträgen des Vereins finanziert wird, ist die Veranstaltung für Mitglieder selbstverständlich kostenlos. Nicht-Mitglieder haben die Möglichkeit vor Ort Mitglied zu werden. Für Studenten beträgt der jährliche Mitgliedsbeitrag 0€, für Alumni 50€. Wer dennoch dem Verein nicht beitreten möchte, wird einen Unkostenbeitrag von circa 35€ bezahlen müssen.",
    isUpcoming: true,
    agenda: [
      { time: "15:00 Uhr", title: "Welcome & Check-In", details: "für Vereinsmitglieder und alle, die es werden wollen" },
      { time: "15:30 Uhr", title: "Mitgliederversammlung Alumni-Verein" },
      { time: "17:00 Uhr", title: "Welcome & Check-In aka offizielle Begrüßung zum Alumni-Seminar", details: "Vereinsmitglieder und Nicht-Mitglieder" },
      { time: "17:30 Uhr", title: "Keynote", speaker: "Dr. Jane Doe, CTO ExampleTech" },
      { time: "18:30 Uhr", title: "Mini Konferenz" },
      { time: "20:00 Uhr", title: "Networking" },
      { time: "bis 01:00 Uhr", title: "Ausklang" },
    ],
  },
  // ... bestehende Events 2024 bis 2018
];
```

### Szenario B: Vergangenes Seminar ins Archiv überführen (Nach dem Event)
1. Setze beim abgelaufenen Event in [`content/events.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/events.ts) das Flag `isUpcoming: false`.
2. Aktualisiere `upcomingAnnouncement` wieder auf den Planungs-Hinweis für das Folgejahr:

```typescript
export const upcomingAnnouncement = {
  headline: "Alumni-Treffen 2026",
  subtext: "Das nächste Alumni-Treffen befindet sich bereits in Planung - stay tuned!",
};
```

---

## 3. Checkliste für den Austausch von PDF-Dokumenten

Alle herunterladbaren PDF-Dokumente liegen im Verzeichnis `public/downloads/` unter **festen, URL-sicheren Dateinamen** (ohne Leerzeichen, ohne Umlaute, ohne Jahreszahlen im Dateinamen):

| Dokument | Pfad im Repository | Öffentliche URL | Referenz in `content/club.ts` |
| :--- | :--- | :--- | :--- |
| **Aufnahmeantrag** | `public/downloads/aufnahmeantrag.pdf` | `/downloads/aufnahmeantrag.pdf` | `clubInfo.downloads.aufnahmeantrag` |
| **Vereinssatzung** | `public/downloads/vereinssatzung.pdf` | `/downloads/vereinssatzung.pdf` | `clubInfo.downloads.vereinssatzung` |
| **Beitragsordnung** | `public/downloads/beitragsordnung.pdf` | `/downloads/beitragsordnung.pdf` | `clubInfo.downloads.beitragsordnung` |

### Vorgehen beim Austausch eines PDFs:
1. Exportiere das neue Dokument als PDF/A oder Standard-PDF.
2. Benenne die Datei lokal exakt wie in der Tabelle oben angegeben (z. B. `aufnahmeantrag.pdf`).
3. Überschreibe die bestehende Datei in `public/downloads/`.
4. **Bei Änderungen an der Satzung oder Beitragsordnung:** Aktualisiere zusätzlich den strukturierten HTML-/Text-Wortlaut in [`content/satzung.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/satzung.ts) bzw. [`content/beitragsordnung.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/beitragsordnung.ts), damit Online-Fassung und PDF-Download jederzeit zu 100 % übereinstimmen.

---

## 4. Architektur-Leitlinien für künftige Änderungen

Um die hohe Code-Qualität, Barrierefreiheit und DSGVO-Konformität dauerhaft zu sichern, gelten für alle Weiterentwicklungen (auch durch KI-Agenten) folgende verbindliche Regeln:

### 4.1 Keine hartcodierten Vereinsdaten in Komponenten
- **Verboten:** Vereinsname, Adresse, IBAN, E-Mail-Adressen, Beitragssätze oder PDF-Pfade direkt in JSX/TSX-Dateien unter `app/` oder `components/` schreiben.
- **Geboten:** Immer `clubInfo` aus [`content/club.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/club.ts), `boardMembers` aus [`content/board.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/board.ts) oder `navigation` aus [`content/navigation.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/navigation.ts) importieren.

### 4.2 Strikte DSGVO-Konformität (Zero External Requests)
- **Keine externen Google-Fonts-Aufrufe zur Laufzeit:** Schriftarten (`Passion_One` und `Source_Sans_3`) werden ausschließlich über `next/font/google` in [`app/layout.tsx`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/app/layout.tsx) eingebunden. Next.js lädt die Schriftdateien zur Build-Zeit herunter und liefert sie lokal vom eigenen Server aus. Verwende niemals `@import url('https://fonts.googleapis.com/...')` in CSS-Dateien.
- **Keine externen Tracker oder Skripte ohne Consent:** Solange die Seite kein aktives Consent-Banner mit Opt-in besitzt, dürfen keine Analyse-Skripte (Google Analytics, Meta Pixel etc.) oder externe Embeds (YouTube-Iframes, Google Maps) ungefragt geladen werden.

### 4.3 Semantische Tailwind-Farben statt Hex-Werten
Verwende in Klassennamen ausschließlich die in [`tailwind.config.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/tailwind.config.ts) definierten Design-Tokens statt willkürlicher Hex-Codes (`text-[#0e3193]`):

| Design-Token | Hex-Wert | Verwendungszweck |
| :--- | :--- | :--- |
| `primary` (`text-primary`, `bg-primary`, `border-primary`) | `#0e3193` | Vereins-Blau für Überschriften, Primärbuttons, Rahmen und Icons |
| `primary-hover` (`hover:bg-primary-hover`, `hover:text-primary-hover`) | `#0849ff` | Leuchtendes Königsblau für Hover-Zustände |
| `primary-dark` / `navy` (`bg-navy`, `text-navy`) | `#001d6e` | Deep Navy für Vollflächen-Banner und den oberen Footer |
| `primary-light` (`text-primary-light`, `border-primary-light`) | `#6e94ff` | Hellblau-Akzent auf dunklem Grund |
| `primary-subtle` (`bg-primary-subtle`) | `#f0f4ff` | Sanfter blauer Hintergrund für Info-Boxen und Badges |
| `primary-surface` (`bg-primary-surface`) | `#f8faff` | Dezenter Flächenhintergrund für Karten und Sektionen |

Für wiederkehrende Buttons und Container stehen in [`app/globals.css`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/app/globals.css) unter `@layer components` die Klassen `.btn-primary`, `.btn-outline`, `.btn-banner` und `.site-container` bereit.

### 4.4 Build- & Deployment-Verifikation vor jedem Commit
Vor jedem Push auf `main` sicherstellen, dass der statische Export fehlerfrei durchläuft:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

Die GitHub Actions Pipeline (`.github/workflows/deploy.yml`) führt diese Prüfungen automatisch aus und veröffentlicht bei Erfolg das `./out`-Verzeichnis inkl. `public/CNAME` (`se-alumni.de`) auf GitHub Pages.
