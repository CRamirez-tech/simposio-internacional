import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Determina dinámicamente la URL base si se compila en GitHub Actions
const getBaseUrl = () => {
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
    return `/${repoName}/`;
  }
  return process.env.VITE_BASE_URL || '/simposio-internacional/';
};

// https://astro.build/config
export default defineConfig({
  site: 'https://cramirez-tech.github.io',
  outDir: './build',
  base: getBaseUrl(),
  build: {
    assets: 'assets',
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
