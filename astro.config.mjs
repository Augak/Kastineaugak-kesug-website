import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kastineaugak.kesug.com',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always'
});