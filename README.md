# David Willis Artist Portfolio Website

A clean, fast, SEO-friendly single-page artist portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Railway (auto-deploy on push to GitHub)

## Features

- 🎨 Single-page responsive design
- 🖼️ Gallery with fullscreen lightbox
- ⚡ Static site generation (SSG)
- 🎯 SEO optimized with metadata
- ♿ Accessible markup (ARIA labels, semantic HTML)
- 🎨 Custom color palette (brand & accent colors)

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main homepage
├── components/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── GallerySection.tsx
│   ├── Lightbox.tsx
│   ├── TimelineSection.tsx
│   └── LegacySection.tsx
└── public/
    └── images/           # Gallery images (add your own)
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

The static site will be exported to the `out/` directory.

## Adding Content

### Gallery Images

1. Place images in `public/images/`
2. Update the `galleryImages` array in `components/GallerySection.tsx`

### Timeline Events

Edit the `timelineEvents` array in `components/TimelineSection.tsx`

### Text Content

Modify component files directly—all content is in the TSX files.

## Color Palette

- **Brand:** `#6366f1` / `#4f46e5`
- **Accent:** `#ec4899` / `#db2777`
- **Surface:** `#f9fafb` / `#111827`

## Deployment

The site is configured for static export and deploys automatically to Railway on push to the main branch.

## License

© 2025 David Willis. All rights reserved.
