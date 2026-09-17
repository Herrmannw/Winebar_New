import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.DEPLOY_TARGET === 'github';

export default defineConfig({
  site: isGitHubPages ? 'https://herrmannw.github.io' : 'https://davincisloungetx.com',
  base: isGitHubPages ? '/Winebar_New' : '/',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
