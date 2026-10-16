import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path must match where the site is served:
//   https://kushankb.github.io/thetinfactory/  -> '/thetinfactory/' (default)
//   custom domain (e.g. thetinfactory.ca)       -> set VITE_BASE=/ in the workflow
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/thetinfactory/',
});
