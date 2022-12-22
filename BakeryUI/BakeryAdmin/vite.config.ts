import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import dns from "dns";
import react from "@vitejs/plugin-react";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "sharedm",
      filename: "sharedm.js",
      remotes: {
        shared: "http://localhost:5000/assets/shared.js",
      },
      exposes: {
        "./SearchBar": "./src/components/searchbar",
      },

      shared: ["react"],
    }),
  ],

  server: {
    // host: "192.168.86.87",
    port: 5001,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },

  preview: {
    host: "localhost",
    port: 5001,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
