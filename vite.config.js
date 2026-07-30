import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';

// Function to get all HTML files in src/pages
const getPageEntries = () => {
  const pagesDir = resolve(__dirname, 'src/pages');
  const pages = {};
  try {
    const files = readdirSync(pagesDir);
    files.forEach(file => {
      if (file.endsWith('.html')) {
        const name = file.replace(/\.html$/, '');
        pages[name] = resolve(pagesDir, file);
      }
    });
  } catch (e) {
    console.warn('No pages directory found or error reading pages:', e.message);
  }
  return pages;
};

export default defineConfig({
  // Base path for GitHub Pages - update this to your repository name
  base: '/',
  
  // Server configuration
  server: {
    port: 5173,
    open: true,
  },
  
  // Build options
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...getPageEntries(),
        about: resolve(__dirname, 'src/pages/about.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
        projects: resolve(__dirname, 'src/pages/projects.html')
      },
      output: {
        manualChunks: {
          vendor: ['gsap'],
        },
      },
    },
  },
  
  // Plugin options
  plugins: [],
});
