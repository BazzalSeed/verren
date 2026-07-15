// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // fully static — the waitlist form posts to Formspree client-side
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false, // en stays at /, zh lives at /zh
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
