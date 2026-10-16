# The Tin Factory — website

React (Vite) rebuild of The Tin Factory's Squarespace site, hosted free on GitHub Pages.
Six pages: Home, The Why, The How, The What (photo gallery), The Who, and Contact.

Live (once deployed): `https://kushankb.github.io/thetinfactory/`

## Editing content

All text, contact details and image filenames live in **`src/content.js`**. Change copy
there; you shouldn't need to touch the page components. Colours and fonts are at the top
of `src/styles.css`.

## First-time setup

```bash
npm install
npm run fetch-images   # downloads all 36 images from Squarespace into public/images
npm run dev            # http://localhost:5173/thetinfactory/
```

**Commit `public/images`.** The images currently come from Squarespace's CDN. Once they're
committed, the site no longer depends on Squarespace, so you can cancel that subscription.
(The deploy workflow also runs `fetch-images` as a fallback, but only while the
Squarespace CDN still serves the files.)

## Deploying to GitHub Pages

```bash
git remote add origin https://github.com/kushankb/thetinfactory.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: GitHub Actions**. Every push to `main`
rebuilds and deploys via `.github/workflows/deploy.yml`.

The base path (`/thetinfactory/`) must match the repo name. If you rename the repo, change
`VITE_BASE` in `.github/workflows/deploy.yml` and the default in `vite.config.js`.

### Using a custom domain (e.g. thetinfactory.ca)

1. Add a file `public/CNAME` containing just `thetinfactory.ca`.
2. Set `VITE_BASE: /` in `.github/workflows/deploy.yml`.
3. At your domain registrar, point the domain at GitHub Pages (four `A` records to
   185.199.108.153, .109.153, .110.153, .111.153, or a `CNAME` for `www` to
   `kushankb.github.io`). Create the DNS records before the first deploy.
4. Repo **Settings → Pages → Custom domain**: enter the domain, tick *Enforce HTTPS*.

## Contact form

GitHub Pages can't run server code, so the form works one of two ways:

- **Default:** clicking *Send* opens the visitor's email app with the message pre-filled,
  addressed to info@thetinfactory.ca.
- **Recommended:** sign up at [formspree.io](https://formspree.io) (free tier: 50
  submissions/month), create a form, and add its ID (the part after `/f/`) as a repository
  secret named `VITE_FORMSPREE_ID` (Settings → Secrets and variables → Actions). Messages
  are then emailed to you and the visitor sees a thank-you note.

## How deep links work

GitHub Pages has no routing, so `/thetinfactory/the-how` would normally 404. The build
writes a `404.html` that saves the requested path and redirects to the app, which restores
it. Visitors land on the right page; the URL flashes briefly on first load.

## Differences from the Squarespace site

- **Font:** Squarespace's *Clarkson* is licensed only for Squarespace sites, so this uses
  *Work Sans* (Google Fonts), which is close but not identical.
- **Gallery:** The What page uses a square-tile grid with a click-to-enlarge lightbox
  (arrow keys and Esc work).
- **Two photos are from Unsplash** (the home page tins and the Who page lids). Unsplash's
  licence allows free commercial use; attribution is appreciated but not required.
- Squarespace extras (analytics, newsletter, scheduling) aren't included.

## Project layout

```
src/content.js          all copy, contact details, image lists
src/pages/*.jsx         one component per page
src/components/         Header (with mobile menu), Footer
src/styles.css          colours, type, layout
scripts/fetch-images.mjs  pulls images from Squarespace → public/images
scripts/postbuild.mjs     writes dist/404.html and dist/.nojekyll
.github/workflows/deploy.yml  build + deploy on push to main
```
