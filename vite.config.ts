import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr({ include: /\.svg$/i }), react(), mkcert()],
  server: {
    port: 3000,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./config/tests/setup.ts"],
    include: ["**/*(*.)@(spec|test).[tj]s?(x)"],

    globals: true,
    css: true,
  },
  resolve: {
    alias: {
      "@app": "/src/app",
      "@pages": "/src/pages",
      "@widgets": "/src/widgets",
      "@features": "/src/features",
      "@entities": "/src/entities",
      "@shared": "/src/shared",
    },
  },
});
