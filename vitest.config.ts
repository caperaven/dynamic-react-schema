import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Vitest configuration for this project.  We use jsdom as the test
// environment because the providers render React components that depend on
// browser APIs (e.g. document.createElement).  The setup file imports
// jest-dom matchers so that we can write more expressive assertions.
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
  },
  plugins: [react()],
});
