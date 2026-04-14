import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://69deaa7288cac3166d4558db--storied-faloodeh-cebf92.netlify.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});