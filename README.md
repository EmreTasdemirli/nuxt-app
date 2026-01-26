# 💸 FinancePulse – Modern Portfolio Tracker

FinancePulse ist eine performante Fullstack-Webanwendung zur Verwaltung persönlicher Finanzen. Dieses Projekt dient als Showcase für moderne Web-Architektur mit **Nuxt 3/4**, **TypeScript** und **Enterprise-State-Management**.

[📂 Dokumentation](https://nuxt.com)

## 🎯 Key Features

- **Modern UI/UX:** Entwickelt mit Nuxt UI (Tailwind CSS) inkl. nativem Dark-Mode Support.
- **Strictly Typed:** Durchgängige Typsicherheit von der API bis zur Komponente mittels TypeScript und Zod.
- **Hybrid Rendering:** Optimierte Performance durch Server-Side Rendering (SSR) für das Dashboard.
- **Real-time Analytics:** Live-Berechnung von Salden und Sparzielen via Pinia Store.

## 🛠 Tech Stack (Stand 2026)

- **Framework:** [Nuxt 3.x](https://nuxt.com) (aktivierter Nuxt 4 Compatibility Mode)
- **State Management:** [Pinia](https://pinia.vuejs.org) (Composition API Syntax)
- **UI & Styling:** [Nuxt UI v3](https://ui.nuxt.com) & Tailwind CSS
- **Runtime-Validierung:** [Zod](https://zod.dev)
- **Utilities:** [VueUse](https://vueuse.org)
- **Backend-Engine:** Nitro (Server-side API Routes)

## 🏗 Architektur-Entscheidungen

- **Nuxt 4 Future Flag:** Das Projekt nutzt bereits die neue Verzeichnisstruktur und Engine-Vorgaben von Nuxt 4, um langfristige Wartbarkeit zu garantieren.
- **Semantic Theming:** Verwendung des neuen Nuxt UI Farbsystems (`primary`/`neutral`) für konsistentes Design.
- **Composables Logic:** Geschäftslogik (wie Währungsformatierung) wurde in Composables extrahiert, um die Komponenten schlank und testbar zu halten.

## 🚦 Quick Start

1. **Repository klonen:**

   ```bash
   git clone https://github.com

   ```

2. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```
3. **Build für Produktion:**
   ```bash
   npm run build
   ```
