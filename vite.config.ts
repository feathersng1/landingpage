import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Resolves figma:asset/* imports to a placeholder SVG
function figmaAssetPlugin(): Plugin {
  const placeholderSvg =
    'data:image/svg+xml;base64,' +
    Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" fill="#e2e2e2">` +
        `<rect width="400" height="300"/>` +
        `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#999" font-size="16" font-family="sans-serif">Image placeholder</text>` +
        `</svg>`
    ).toString('base64');

  return {
    name: 'figma-asset-placeholder',
    resolveId(source) {
      if (source.startsWith('figma:asset/')) {
        return '\0' + source;
      }
    },
    load(id) {
      if (id.startsWith('\0figma:asset/')) {
        return `export default "${placeholderSvg}";`;
      }
    },
  };
}

export default defineConfig({
  plugins: [figmaAssetPlugin(), react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
});
