import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
export default defineConfig({
  plugins: [pluginReact(), pluginSass({  })],
  
  server: {
    historyApiFallback: true,
    port: 3000,
  },
  html: {
    title: 'Mi App con Rsbuild + React + SCSS',
  },
});


