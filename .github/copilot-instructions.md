# GitHub Copilot Project Summary — Artist Portfolio Website

You are assisting with a Next.js + TypeScript + Tailwind CSS single-page artist reference website.

## Tech + Structure
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Deployment: GitHub → Railway (auto deploy on push)
- Pages: Only one — the main homepage (`app/page.tsx`)
- Components in `/components`:
  - HeroSection
  - AboutSection
  - GallerySection
  - Lightbox (modal)
  - TimelineSection
  - LegacySection

## What Copilot Should Generate
When I write comments like "// TODO: add new section" or "// TODO: improve layout," generate:
- React components (TSX) using functional components
- Semantic HTML (`header`, `section`, `footer`)
- Tailwind utility classes for layout + responsiveness
- Accessible markup (alt text, aria attributes)
- Lightweight code — avoid heavy dependencies
- Image grids using Next.js `<Image />`
- Static, SSG-friendly code (no dynamic server routes)

## Styling Rules
- Use Tailwind
- Prefer responsive utilities (e.g., `md:text-4xl`)
- Prefer grids for gallery (e.g., `grid grid-cols-2 md:grid-cols-4 gap-4`)
- Use the custom color palette:
  - brand: #6366f1 / #4f46e5
  - accent: #ec4899 / #db2777
  - surface: #f9fafb / #111827

## Behavior Rules
- Gallery images open in a fullscreen lightbox
- Lightbox closes on click or ESC
- Components must be clean, readable, and modular
- No external UI libraries unless explicitly asked

## SEO
- Proper use of <title>, <meta> tags in `layout.tsx`
- Semantic headings: H1 (hero), H2 (sections)
- Meaningful alt text for all images

## Use Cases for Copilot
Examples of triggers:
- "// TODO: Add a new section with cards"
- "// Create responsive layout for exhibitions"
- "// Add 6 new images to gallery array"
- "// Add OG tags to metadata"
- "// Build a navigation bar linking to section IDs"

## Project Goal
A clean, fast, SEO-friendly single-page artist site with modular sections, a working gallery + lightbox, and easy expansion.

---

## Setup Progress

- [x] Create copilot-instructions.md
- [x] Get project setup info
- [x] Scaffold Next.js project
- [x] Customize components
- [x] Install dependencies
- [x] Create dev task
- [x] Update documentation

## Development

Run the dev server:
```bash
npm run dev
```

Visit http://localhost:3000 to view the site.

## Next Steps

1. Add actual gallery images to `public/images/`
2. Update content in component files
3. Customize colors in `tailwind.config.ts` if needed
4. Connect GitHub repo to Railway for deployment
