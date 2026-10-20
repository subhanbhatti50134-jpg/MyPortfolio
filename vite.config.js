import { defineConfig } from 'vite';

// Relative base so the same build works at a domain root (Netlify /
// subhanbhatti.live) and under a subpath (GitHub Pages /MyPortfolio/).
export default defineConfig({
  base: './',
});
