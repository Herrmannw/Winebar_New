import { defineConfig } from 'astro/config';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://herrmannw.github.io',
  base: isProduction ? '/Winebar_New' : '/',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
