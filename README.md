# TEDxBhrikutimandap 2026

Official website for **TEDxBhrikutimandap 2026**, themed **"Envisioning Tomorrow"**. The site presents event information, speakers, schedule, sponsors, team details, ticket interest capture, contact information, SEO metadata, Open Graph images, and structured data for search engines.

## Tech Stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Framer Motion](https://www.framer.com/motion/) for UI animation
- [Lucide React](https://lucide.dev/) for icons
- Google Analytics and Microsoft Clarity scripts configured from site data
- SheetDB integration for ticket waitlist submissions

## Project Structure

```text
app/                  Next.js routes, layouts, API routes, sitemap, and OG image routes
src/components/       Reusable UI components
src/data/             Site content, navigation, schedule, speakers, sponsors, team, and SEO config
src/lib/              Shared helpers, including Open Graph image rendering
src/styles/           Design system tokens and shared style primitives
public/               Static assets, images, fonts, manifest, robots.txt, and favicons
```

## Getting Started

Use `pnpm`, because this repository includes a `pnpm-lock.yaml`.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
pnpm dev
```

Starts the development server with Turbopack.

```bash
pnpm build
```

Creates a production build.

```bash
pnpm start
```

Runs the production build locally. Run `pnpm build` first.

```bash
pnpm lint
```

Runs ESLint for the project.

## Development Workflow

1. Install dependencies with `pnpm install`.
2. Start the local server with `pnpm dev`.
3. Edit pages in `app/` and reusable UI in `src/components/`.
4. Update event content through the files in `src/data/`.
5. Run `pnpm lint` before committing.
6. Run `pnpm build` before deployment-facing changes.

## Content Updates

Most event content is centralized in `src/data/`:

- `siteConfig.ts` controls the event name, theme, description, social links, form links, logos, and analytics IDs.
- `navigation.ts` controls site navigation.
- `speakers.ts` controls speaker data.
- `schedule.ts` controls event schedule data.
- `sponsors.ts` controls sponsor tiers and sponsor entries.
- `team.ts` controls organizer/team data.
- `seoConfig.ts` controls page-level SEO configuration.

Images and static files belong in `public/`. Sponsor logos currently live under `public/images/sponsors/`, and favicons live under `public/favicon/`.

## API Routes

The ticket waitlist endpoint is implemented at:

```text
app/api/ticket-waitlist/route.ts
```

It accepts an email address and submits it to SheetDB. The current SheetDB endpoint is hard-coded in the route, so update that file if the backing sheet changes.

## SEO and Metadata

The app includes:

- App Router metadata through route layouts
- Dynamic Open Graph image routes
- Sitemap generation in `app/sitemap.ts`
- `robots.txt` and `manifest.json` in `public/`
- JSON-LD helper components in `src/components/`

## Deployment

The app can be deployed to any platform that supports Next.js. Vercel is the most direct option.

Before deploying, run:

```bash
pnpm lint
pnpm build
```

For production, confirm that analytics IDs, social links, event date, form URLs, and sponsor/speaker content are final in `src/data/`.
