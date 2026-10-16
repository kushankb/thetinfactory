// Makes deep links (e.g. /the-how) work on GitHub Pages: Pages serves 404.html for
// unknown paths, which saves the path and bounces to the app root to restore it.
import { writeFile } from 'node:fs/promises';
const base = process.env.VITE_BASE || '/thetinfactory/';
const html = `<!doctype html><meta charset="utf-8"><title>The Tin Factory</title>
<script>sessionStorage.setItem('spa-redirect', location.pathname + location.search + location.hash);
location.replace('${base}');</script>`;
await writeFile('dist/404.html', html);
await writeFile('dist/.nojekyll', '');
console.log('wrote dist/404.html and dist/.nojekyll');
