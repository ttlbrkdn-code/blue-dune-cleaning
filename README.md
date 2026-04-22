# Blue Dune Exterior Cleaning Website

This is a production-ready Vite + React + Tailwind site for Blue Dune Exterior Cleaning.

## Requirements

- Node.js 18+ (recommended: Node.js 20 LTS)
- npm 9+

## Local development

```powershell
npm.cmd install
npm.cmd run dev
```

## Production build

```powershell
npm.cmd run build
```

The build output is generated in `dist/`.

## Deploy options

### Vercel

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`

### Any static host (S3, Azure Static Web Apps, GitHub Pages)

Upload the contents of `dist/` after running the production build.

## Domain and SEO checklist

Before going live, update these values in `index.html`:

- `og:url`
- `canonical`
- (optional) add an `og:image` for social sharing

## Contact details checklist

Before final publish, verify these in `src/App.jsx`:

- `phoneDisplay`
- `phoneHref`
- `emailAddress`

## Notes for PowerShell users

If your environment blocks `npm`, use `npm.cmd` as shown above.
