# Techstack Design & Architektur

Dieses Dokument beschreibt die Architektur für die Website des **Elitestudiengang Software Engineering Alumni e.V.** ([se-alumni.de](https://www.se-alumni.de)).

---

## 1. Kern-Anforderung & Zielkonflikt

> **Zielstellung:**
> 1. Betrieb als **kostenlose, rein statische Website** auf **GitHub Pages** (inkl. Custom Domain `se-alumni.de` über `public/CNAME`).
> 2. Geplante zukünftige Migration auf **Vercel** für interaktive Features (Online-Mitgliedsantrag, Event-Registrierung, Mitgliederbereich, Beitragszahlung via Stripe/SEPA).
> 3. **Keine Wegwerf-Arbeit & höchste Wartbarkeit:** Die statische Version soll ohne Rewrite der Komponenten direkt zur interaktiven Plattform wachsen können und durch eine strikte **Single Source of Truth** (`content/`) von jedem Vorstandsmitglied leicht pflegbar sein.

---

## 2. Der Architektur-Vergleich

| Kriterium | Option 1: Next.js 14 (Static Export) ⭐ *(Gewählt)* | Option 2: Astro | Option 3: Reines HTML / Vanilla CSS |
| :--- | :--- | :--- | :--- |
| **Statisch auf GitHub Pages** | ✅ Voll unterstützt via `output: 'export'` (erzeugt reines HTML/CSS/JS in `./out`) | ✅ Exzellent | ✅ Direktes Hosting |
| **Zukunft auf Vercel** | ⭐ **Heimspiel:** Next.js ist Vercels eigenes Framework, beste Integration überhaupt | 🟡 Sehr gut, aber SSR erfordert Vercel-Adapter | ❌ Keine Serverless Functions / Backend |
| **Code-Wiederverwendung** | 💯 **100 %**: Beim Wechsel auf Vercel muss keine Zeile Code umgeschrieben werden | 🟡 70 %: Komponenten müssten bei Next.js-Wunsch migriert werden | ❌ 0 %: Muss für Next.js komplett neu geschrieben werden |
| **Komponenten & Redesign** | ✅ React 18, TypeScript 5, modulare Komponenten (`Header`, `Footer`, `BoardSection`, `CtaBanner`) | ✅ Astro-Komponenten | ❌ Hohe Redundanz über 9 HTML-Dateien |
| **Interaktive Features** | ✅ Server Actions, API Routes, Auth, DB-Konnektoren sofort zuschaltbar | ✅ API-Endpunkte via Node-Adapter | ❌ Externe Backend-Dienste zwingend nötig |
| **Laufende Kosten** | 0 € auf GitHub Pages, 0 € im Vercel Hobby Tier | 0 € | 0 € |

---

## 3. Die umgesetzte Lösung: Next.js 14 mit Static Export

### 3.1 Das Konzept
Die Website ist als modernes **Next.js 14 (App Router)** Projekt mit **React 18**, **TypeScript 5** und **Tailwind CSS 3.4** umgesetzt.
In der [`next.config.mjs`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/next.config.mjs) ist der statische Export aktiviert:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Erzeugt reines statisches HTML im Ordner ./out
  images: {
    unoptimized: true, // Erforderlich für rein statisches Hosting ohne Vercel Image Server
  },
  trailingSlash: true, // Wichtig für sauberes Routing auf GitHub Pages (/verein/mitgliedschaft/index.html)
};

export default nextConfig;
```

### 3.2 Warum dies die perfekte Brücke ist
1. **Heute (Statischer Betrieb auf GitHub Pages):**
   - Ein Git-Push auf `main` triggert die GitHub Actions Workflow-Datei [`.github/workflows/deploy.yml`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/.github/workflows/deploy.yml).
   - GitHub Actions prüft Typen (`npx tsc --noEmit`), führt Linting und `npm run build` aus und veröffentlicht das erzeugte `./out`-Verzeichnis direkt auf **GitHub Pages**.
   - Die Datei `public/CNAME` stellt sicher, dass die Custom Domain `se-alumni.de` bei jedem Deployment erhalten bleibt.
   - **Kosten: 0 €**, keine Serverwartung, maximale Sicherheit und schnelle Ladezeiten.
2. **Morgen (Interaktive Ausbaustufe auf Vercel):**
   - Sobald z. B. ein dynamisches Beitrittsformular oder ein geschützter Mitgliederbereich gewünscht wird, wird das Repository mit **Vercel** verknüpft.
   - In [`next.config.mjs`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/next.config.mjs) wird lediglich `output: 'export'` (sowie `images.unoptimized`) entfernt.
   - Sofort stehen Serverless Functions, Server Actions, Image Optimization und Datenbank-Anbindungen (Vercel Postgres, Supabase etc.) zur Verfügung.
   - **Aufwand für die Migration: 5 Minuten, 0 Zeilen Redesign.**

---

## 4. Detaillierter Tech-Stack

### 4.1 Framework & Laufzeitumgebung
- **Framework:** Next.js `^14.2.15` (App Router)
- **UI-Bibliothek:** React `^18.3.1` & React DOM `^18.3.1`
- **Sprache:** TypeScript `^5.6.3` (strikte Typisierung für Vereinsdaten, Veranstaltungen, Vorstandsmitglieder, Satzung und Beitragsordnung)
- **Styling:** Tailwind CSS `^3.4.14` mit PostCSS & Autoprefixer
- **Icons:** `lucide-react` (`^0.453.0`)
- **Paketmanager & Runtime:** `npm` auf Node.js LTS (v20+)

### 4.2 DSGVO-konforme Typografie & Design-System
- **100 % DSGVO-konformes Self-Hosting der Schriftarten (`next/font/google`):**
  - In [`app/layout.tsx`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/app/layout.tsx) werden `Passion_One` (Gewichte `400`, `700` als `--font-passion-one`) und `Source_Sans_3` (Gewichte `400`, `600`, `700` als `--font-source-sans`) über `next/font/google` geladen.
  - Die Schriftdateien werden bereits **zur Build-Zeit** heruntergeladen und als statische Assets direkt von der eigenen Domain ausgeliefert. Beim Besuch der Webseite findet **keinerlei Verbindung zu Google-Servern** (`fonts.googleapis.com` / `fonts.gstatic.com`) statt – es werden keine IP-Adressen an Dritte übertragen.
- **Semantische Tailwind Design-Tokens ([`tailwind.config.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/tailwind.config.ts)):**
  - `primary.DEFAULT` (`text-primary`, `bg-primary`): `#0e3193` (Vereins-Blau für Überschriften, Primärbuttons und Rahmen)
  - `primary.hover` (`hover:bg-primary-hover`, `hover:text-primary-hover`): `#0849ff` (Leuchtendes Königsblau für Hover-Zustände)
  - `primary.dark` / `navy` (`bg-navy`, `text-navy`): `#001d6e` (Deep Navy für Vollflächen-Banner und oberen Footer)
  - `primary.light` (`text-primary-light`): `#6e94ff` (Hellblau-Akzent)
  - `primary.subtle` (`bg-primary-subtle`): `#f0f4ff` (Dezenter Akzent-Hintergrund)
  - `primary.surface` (`bg-primary-surface`): `#f8faff` (Karten- und Sektionshintergrund)
  - `borderRadius.jimdo` (`rounded-jimdo`): `5px`
- **Wiederverwendbare Komponenten-Klassen (`@layer components` in [`app/globals.css`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/app/globals.css)):**
  - `.btn-primary`, `.btn-outline`, `.btn-banner` und `.site-container` kapseln das Marken-Styling ohne `!important`-Overrides.

### 4.3 Content- & Daten-Architektur (Single Source of Truth in `content/`)
Alle Vereinsdaten und Rechtstexte sind zentral im Ordner [`content/`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/) strukturiert:

- **[`content/club.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/club.ts):**
  - Zentrale Stammdaten (`clubInfo`): Offizieller Vereinsname, Kurzname, Gründungsjahr, `c/o`-Geschäftsstellenadresse (`c/o Qplix GmbH, Nußbaumstraße 12, 80336 München`), Registergericht (`Amtsgericht München`, `VR 208695`), Verantwortlicher nach § 55 Abs. 2 RStV, E-Mail (`vorstand@se-alumni.de`), Bankverbindung (`IBAN`, `BIC`), Mitgliedsbeiträge (`0 €` für Studierende, `50 €` für Alumni), Daten zum Deutschlandstipendium sowie alle PDF-Download-Pfade.
  - Speist dynamisch `Footer`, `Home`, `Mitgliedschaft`, `Impressum`, `Datenschutz` und `Widerruf`.
- **[`content/board.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/board.ts):**
  - Liste aller Vorstandsmitglieder und Kassenprüfer inkl. `isVertretungsberechtigt` und `impressumRole`.
  - Aktualisiert gleichzeitig das Vorstands-Raster auf der Startseite ([`components/BoardSection.tsx`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/components/BoardSection.tsx)) und die gesetzliche Vertretungsangabe im Impressum ([`app/impressum/page.tsx`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/app/impressum/page.tsx)).
- **[`content/events.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/events.ts):**
  - Enthält `upcomingAnnouncement` für das nächste geplante Treffen sowie das typisierte Array `events` mit der vollständigen Historie aller Alumni-Seminare von **2018 bis 2024** (Datum, Ort, Anfahrt, Keynote, Agenda, Fachvorträge, Organisatoren, Kosten).
- **[`content/satzung.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/satzung.ts):**
  - Vollständiger, ungekürzter Wortlaut der Vereinssatzung (§§ 1 bis 16) als typisierte Datenstruktur für [`app/verein/satzung/page.tsx`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/app/verein/satzung/page.tsx) inkl. interaktivem Inhaltsverzeichnis.
- **[`content/beitragsordnung.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/beitragsordnung.ts):**
  - Vollständiger, wortgetreuer Text der Beitrags- und Kassenordnung (§§ 1 bis 7) für [`app/verein/beitragsordnung/page.tsx`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/app/verein/beitragsordnung/page.tsx).
- **[`content/navigation.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/navigation.ts):**
  - Einheitliche Menü- und Linkstruktur für [`components/Header.tsx`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/components/Header.tsx) und [`components/Footer.tsx`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/components/Footer.tsx).

### 4.4 Normalisiertes Asset-Verzeichnis (`public/`)
- **`public/downloads/`:**
  - `aufnahmeantrag.pdf` (`/downloads/aufnahmeantrag.pdf`)
  - `vereinssatzung.pdf` (`/downloads/vereinssatzung.pdf`)
  - `beitragsordnung.pdf` (`/downloads/beitragsordnung.pdf`)
  - Durch den Verzicht auf Leerzeichen, Umlaute und Datumszusätze in den Dateinamen bleiben die Download-URLs dauerhaft stabil und frei von `%20`-URL-Encoding-Problemen.
- **`public/images/`:**
  - Vereinslogos, Banner und Vorstands-Porträts (`public/images/board/`).
- **`public/CNAME`:**
  - Enthält `se-alumni.de` für das automatische Custom-Domain-Routing auf GitHub Pages.

---

## 5. Deployment-Pipelines

### 5.1 GitHub Pages Deployment mit Quality Gates (Aktuell)
Workflow-Datei: [`.github/workflows/deploy.yml`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/.github/workflows/deploy.yml)
- Wird bei jedem Push auf `main` (Deployment) sowie bei Pull Requests (Build- & Typ-Verifikation) ausgeführt.
- Führt `npm ci`, Typecheck (`npx tsc --noEmit`), Linting (`npm run lint`) und den statischen Export (`npm run build`) aus, bevor `./out` auf GitHub Pages veröffentlicht wird.

### 5.2 Zukünftiges Vercel Deployment
- Verbindung via GitHub App
- Preview Deployments für jeden Pull Request
- Produktion auf `main`
- Volle Unterstützung für SSR, Server Actions und Edge Middleware.

---

## 6. Zukünftige interaktive Features (Vercel-Phase)

1. **Digitaler Aufnahmeantrag:**
   - Web-Formular mit Validierung (Zod + React Hook Form)
   - Automatisches Generieren von Aufnahmebestätigungs-Mails
   - Optional: Digitale Unterschrift / SEPA-Lastschriftmandat
2. **Event-Registration & RSVP:**
   - Interaktive Anmeldung zum jährlichen Alumni-Seminar (inkl. Essenspräferenzen, Begleitpersonen)
   - Automatisches Zählen von Plätzen und Warteliste
3. **Mitglieder-Portal / Absolventen-Netzwerk:**
   - Magic Link Auth (z. B. via Resend / NextAuth / Supabase)
   - Absolventen-Verzeichnis nach Jahrgängen (1. JG bis heute)
4. **Online-Beitragsabwicklung:**
   - Stripe Checkout oder SEPA-Integration für Vereinsbeiträge und Spenden.
