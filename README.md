# Rehan S Nair — Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # preview the build
```

Requires Node.js 18+.

## What to replace

| Item | Where |
| --- | --- |
| Profile photo | `src/components/Hero.jsx` (placeholder block) and `About.jsx` (gallery frames) |
| Project screenshots | put images in `src/assets/projects/`, import them in `src/data/portfolioData.js`, set `image` |
| Project GitHub / Live links | `github` and `live` fields in `projects` (empty = a "soon" badge is shown, no fake links) |
| Certificate images | `src/assets/certificates/`, set `image` in `certifications` |
| Resume | `public/resume/Rehan_S_Nair_Resume.pdf` (already your uploaded resume) |

All text content lives in `src/data/portfolioData.js`.

## Contact form (EmailJS)

1. Create an account at emailjs.com, add an email service and a template.
2. Template variables used: `from_name`, `from_email`, `subject`, `message`, `to_email`.
3. Copy `.env.example` to `.env` and fill in `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.

Without these, the form opens the visitor's mail app addressed to you instead.

## Deploy to Vercel

Push to GitHub, import the repo in Vercel (framework preset: Vite). Add the three `VITE_EMAILJS_*` variables in Project Settings → Environment Variables.
