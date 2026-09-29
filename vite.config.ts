// @lovable.dev/vite-tanstack-config already includes the core TanStack/Vite plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: process.env.GITHUB_ACTIONS ? "/elifoot-lite/" : "/",
  },
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
    },
    server: { entry: "server" },
  },
});
