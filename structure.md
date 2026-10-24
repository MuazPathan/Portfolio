# Project Folder Structure

This document outlines the directory structure and organization of the **Portfolio-Neu-Brutalist** repository.

---

## 🌳 Directory Tree

```
Portfolio-Neu-Brutalist/
├── .env.local                    # Local environment variables (e.g. Gemini API keys)
├── .gitignore                    # Git ignore specifications
├── .prettierignore               # Prettier ignore specifications
├── .prettierrc                   # Prettier formatting rules
├── AGENTS.md                     # Agent & Lovable synchronization rules
├── bun.lock                      # Bun package lockfile
├── bunfig.toml                   # Bun configuration
├── components.json               # shadcn/ui component configuration
├── eslint.config.js              # ESLint flat configuration (React + TypeScript)
├── package.json                  # Project manifest, scripts, and dependencies
├── package-lock.json             # NPM dependency lockfile
├── README.md                     # Portfolio profile & biography
├── structure.md                  # Project folder structure & documentation
├── tsconfig.json                 # TypeScript compiler configuration & path aliases
├── vite.config.ts                # Vite bundler & plugin configuration
├── vitest.config.ts              # Vitest test runner configuration
│
├── app/                          # Server-side API endpoints & routes
│   └── api/
│       └── chat/
│           └── route.ts          # AI Portfolio Chat endpoint (powered by @google/genai)
│
├── data/                         # Shared knowledge base & prompt data
│   └── profileData.ts            # Detailed professional context for AI Assistant
│
├── icons/                        # Tech stack SVG icon library (repository copies)
│   ├── AWS-Dark.svg
│   ├── Docker.svg
│   ├── Kubernetes.svg
│   ├── Python.svg
│   └── ... (200+ technology SVGs)
│
├── public/                       # Static public assets served directly
│   ├── apple-touch-icon.png      # Apple mobile touch icon
│   ├── baymax.png                # Transparent cutout of the white marshmallow robot assistant
│   ├── baymax-head.png           # Head cutout of the marshmallow robot for avatars & headers
│   ├── favicon.ico               # Browser favicon
│   ├── favicon.png               # High-res favicon PNG
│   ├── favicon-16x16.png         # 16x16 Favicon
│   ├── favicon-32x32.png         # 32x32 Favicon
│   ├── robots.txt                # Search engine crawler policies
│   └── icons/                    # Public tech SVG icons directory
│       └── ... (Technology SVG icons for badges & cards)
│
└── src/                          # Main client application source code
    ├── router.tsx                # TanStack Router initialization & setup
    ├── routeTree.gen.ts          # Auto-generated type-safe route tree
    ├── server.ts                 # Nitro / SSR server entrypoint
    ├── start.ts                  # Client entrypoint for TanStack Start
    ├── styles.css                # Global CSS, theme variables & Tailwind styles
    │
    ├── components/               # React UI components
    │   ├── PortfolioChat.tsx     # Interactive floating AI assistant chat component
    │   └── ui/                   # Neo-Brutalist UI component library (shadcn/radix)
    │       ├── accordion.tsx
    │       ├── alert-dialog.tsx
    │       ├── alert.tsx
    │       ├── aspect-ratio.tsx
    │       ├── avatar.tsx
    │       ├── badge.tsx
    │       ├── breadcrumb.tsx
    │       ├── button.tsx
    │       ├── calendar.tsx
    │       ├── card.tsx
    │       ├── carousel.tsx
    │       ├── chart.tsx
    │       ├── checkbox.tsx
    │       ├── collapsible.tsx
    │       ├── command.tsx
    │       ├── context-menu.tsx
    │       ├── dialog.tsx
    │       ├── drawer.tsx
    │       ├── dropdown-menu.tsx
    │       ├── form.tsx
    │       ├── hover-card.tsx
    │       ├── input-otp.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── menubar.tsx
    │       ├── navigation-menu.tsx
    │       ├── pagination.tsx
    │       ├── popover.tsx
    │       ├── progress.tsx
    │       ├── radio-group.tsx
    │       ├── resizable.tsx
    │       ├── scroll-area.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── sidebar.tsx
    │       ├── skeleton.tsx
    │       ├── slider.tsx
    │       ├── sonner.tsx
    │       ├── switch.tsx
    │       ├── table.tsx
    │       ├── tabs.tsx
    │       ├── textarea.tsx
    │       ├── toggle-group.tsx
    │       ├── toggle.tsx
    │       └── tooltip.tsx
    │
    ├── data/                     # Client application data
    │   └── tech-stack.ts         # Comprehensive 200+ tech stack items & category taxonomy
    │
    ├── hooks/                    # Reusable React custom hooks
    │   └── use-mobile.tsx        # Mobile viewport detection hook
    │
    ├── lib/                      # Helper libraries & utility functions
    │   ├── chat-service.ts       # Gemini AI chat generation service & model fallback orchestration
    │   ├── error-capture.ts      # Error telemetry & capture helpers
    │   ├── error-page.ts         # Error page rendering helpers
    │   ├── lovable-error-reporting.ts # Lovable error monitoring integration
    │   └── utils.ts              # Styling helpers (e.g., `cn` helper for Tailwind)
    │
    ├── routes/                   # File-based routing (TanStack Router)
    │   ├── __root.tsx            # Root layout component (Head, HTML shell, Navbar)
    │   ├── index.tsx             # Main landing page (Hero, Architecture, Tech Stack, Experience)
    │   └── README.md             # Routing documentation & notes
    │
    └── test/                     # Automated testing suite
        ├── app-routing.test.tsx  # Route testing with React Testing Library
        └── setup.ts              # Vitest environment setup
```

---

## 📁 Key Folders & Responsibilities

### 1. `src/` (Core Application)
- **`routes/`**: Handles application routes via [TanStack Router](https://tanstack.com/router).
  - `__root.tsx`: Top-level document wrapper with metadata, fonts, navigation headers, and footer.
  - `index.tsx`: The primary portfolio landing page showcasing hero section, cloud architecture pillars, interactive tech stack explorer, work experience, projects, education, and contact section.
- **`components/ui/`**: 40+ accessible UI primitives built with Radix UI and styled with a distinct Neo-Brutalist visual design language (bold borders, high-contrast drop shadows, tactile buttons).
- **`components/PortfolioChat.tsx`**: Floating interactive chat widget that communicates with the AI backend to answer questions about skills, architecture experience, and projects.
- **`data/tech-stack.ts`**: Complete registry of 200+ technology items, SVG icon references, categories, and filtering tags for the interactive tech stack grid.
- **`lib/`**: Common utility functions including Tailwind class merging (`cn`), error handling, and reporting.

### 2. Backend & API Routes
- **`/api/chat` Endpoint**: Handles incoming chat messages, loads prompt instructions from `data/profileData.ts`, and interfaces with Google Gemini (`@google/genai`) to generate responses. Handled via `src/server.ts` (production) and Vite dev middleware (`vite.config.ts`).
- **`src/lib/chat-service.ts`**: Core Gemini inference logic with resilient model fallback (`gemini-3.5-flash-lite`, `gemini-flash-latest`, `gemini-3.8-flash`).

### 3. `data/` (Profile & Context Data)
- **`data/profileData.ts`**: Centralized source of truth containing verified profile information, career achievements, architectural standards, and categorized tech stack items for the AI chat agent.

### 4. `public/` & `icons/` (Assets & Icons)
- **`public/icons/`**: Curated vector icons (SVGs) used across the tech stack directory and cloud architecture badges.
- **`public/`**: Root web assets including favicons, Apple touch icons, and crawler configuration (`robots.txt`).

### 5. Root Configuration
- **`vite.config.ts`**: Configured with TanStack Start, React 19 plugins, and Tailwind CSS v4 compiler.
- **`vitest.config.ts`**: Unit test configuration utilizing `jsdom` and `@testing-library/react`.
- **`package.json`**: Dependency manifest, build scripts, and engine specifications.
