# Quad Production Technologies — Corporate Website

A Vite + React + TypeScript rebuild of the Quad Production Technologies site,
based on the client's brand brochure and existing site content.

## Structure

```
src/
  assets/         product photography goes here (currently placeholders)
  components/     reusable UI atoms (Header, Footer, cards, form, table…)
    sections/     page-section components (Hero, AboutSection, etc.)
  data/           static content (expertise, products, projects, offices…)
  hooks/          useContactForm — form state + Formspree submission
  layouts/        MainLayout — header/footer wrapper
  pages/          HomePage — composes all sections
  routes/         AppRoutes — react-router route table
  services/       formspree.ts — API call to Formspree
  types/          shared TypeScript interfaces
  index.css       global design system (colors, buttons, cards, grid, tables)
```

## Getting started

```bash
npm install
npm run dev
```

## Before going live

1. **Formspree** — open `src/services/formspree.ts` and replace
   `FORMSPREE_ENDPOINT` with the client's real form URL
   (`https://formspree.io/f/XXXXXXX`, from formspree.io).
2. **Product photography** — drop real photos into `src/assets/products/`
   and swap `ProductPlaceholder` for an `<img>` inside
   `src/components/sections/ProductsSection.tsx`.
3. **Copy** — all text content lives in `src/data/content.ts`, so edits
   don't require touching component code.

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```
