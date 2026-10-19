# `_agents` Documentation & Planning

Dieser Ordner enthält die vollständigen Architektur-, Planungs-, Wartungs- und Bestandsunterlagen für die Website des **Elitestudiengang Software Engineering Alumni e.V.** (`https://www.se-alumni.de`):

1. [**PLAN.md**](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/_agents/PLAN.md): Der Masterplan von der Bestandsaufnahme über das Maintainability-Revamp (Phase 6) bis zum GitHub Pages Launch und der späteren Vercel-Migration.
2. [**MAINTENANCE.md**](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/_agents/MAINTENANCE.md): Das praktische Schritt-für-Schritt-Handbuch für Vorstände und Entwickler (Vorstandswahl-Checkliste, neues Alumni-Seminar eintragen, PDF-Austausch, Architektur-Leitlinien).
3. [**TECHSTACK.md**](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/_agents/TECHSTACK.md): Die Architekturentscheidung und technische Dokumentation für Next.js 14 (App Router, Static Export), React 18, TypeScript 5, Tailwind CSS 3.4 und DSGVO-konforme lokale Fonts (`next/font/google`).
4. [**SCRAPED_INVENTORY.md**](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/_agents/SCRAPED_INVENTORY.md): Der vollständige Inhalts- und Asset-Katalog, direkt von `https://www.se-alumni.de/` gesichert, inklusive Mapping auf die normalisierten Zielpfade in `public/downloads/` und der gesamten Seminar-Chronik (2018–2024).

---

### Single Source of Truth (`content/`)

Alle dynamischen Vereinsdaten und Rechtstexte sind strikt von den UI-Komponenten getrennt und liegen im Ordner [`content/`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/):

- [`content/club.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/club.ts): Zentrale Vereins-Stammdaten (Name, `c/o`-Geschäftsstelle, Vereinsregister, IBAN/BIC, Mitgliedsbeiträge, Deutschlandstipendium, standardisierte PDF-Download-Pfade).
- [`content/board.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/board.ts): Aktuelle Vorstandsmitglieder und Kassenprüfer (speist sowohl die Startseite als auch automatisch das Impressum über `isVertretungsberechtigt`).
- [`content/events.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/events.ts): Ankündigung des nächsten Alumni-Treffens sowie die lückenlose Veranstaltungs-Chronik von 2018 bis 2024.
- [`content/satzung.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/satzung.ts): Vollständiger, wortgetreuer Text der Vereinssatzung (§§ 1–15).
- [`content/beitragsordnung.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/beitragsordnung.ts): Vollständiger, wortgetreuer Text der Beitrags- und Kassenordnung (§§ 1–4).
- [`content/navigation.ts`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/content/navigation.ts): Zentrale Navigationsstruktur für Desktop-Header, Mobile-Menü und Footer.

---

### Historisches Scraping-Archiv (`_agents/archive/`)
Die einmaligen Migrations-Skripte und extrahierten Markdown-Referenztexte (~58 KB) sind sauber im Unterordner `_agents/archive/` archiviert (die 93 MB an ungenutzten Jimdo-Rohbildern und HTML-Dumps wurden bereinigt):
- [`_agents/archive/scripts/`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/_agents/archive/scripts): Python-Skripte (`scrape.py`, `export_clean_content.py`, etc.) zur damaligen Extraktion der Jimdo-Seite.
- [`_agents/archive/site_content/`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/_agents/archive/site_content): Exportierte Markdown-Dateien aller ursprünglichen Seiteninhalte als historische Referenz.
- [`_agents/archive/full_site_manifest.json`](file:///d:/Emi%20Entertainment/workspace/se-alumni-homepage/_agents/archive/full_site_manifest.json): JSON-Manifest der damaligen Jimdo-Ressourcen.
