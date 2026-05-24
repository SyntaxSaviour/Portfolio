# Farzan Brutalist Portfolio

A fully responsive Neo-Brutalist personal portfolio for Farzan, built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Lucide React, next-themes, and shadcn-style reusable UI primitives.

## Highlights

- Resume-driven editable content in `lib/portfolio.ts`
- Profile photo and resume stored in `public/assets`
- Dark/light mode toggle
- Scroll progress indicator and active section navigation
- Ctrl+K command palette
- Dynamic background with canvas particles, grid layers, floating stickers, and scanline texture
- Framer Motion section reveals, hover bounces, card tilts, and playful terminal interactions
- Responsive mobile navigation and layouts
- SEO metadata in `app/layout.tsx`

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

On Windows, you can also double-click:

```txt
run-portfolio.bat
```

It installs dependencies when missing, opens the browser, and starts the dev server.
If port `3000` is already busy, it can stop the old process and clears `.next` before starting so stale Webpack chunks do not survive between runs.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Editing Content

Most portfolio text lives in:

```txt
lib/portfolio.ts
```

Update this file to change projects, links, skills, timeline entries, research cards, chatbot prompts, and contact info.

Assets live in:

```txt
public/assets/farzan-profile.jpg
public/assets/Farzan_Resume.pdf
```

The resume PDF lists the name as `Farjan Alam`; the site displays `Farzan` because that was requested in the build brief.
