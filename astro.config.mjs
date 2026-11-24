import { defineConfig } from 'astro/config';
export default defineConfig({site:'https://augak.github.io',base:process.env.BASE_PATH||'/',output:'static',trailingSlash:'never',build:{format:'file'}});
