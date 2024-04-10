import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ipekunuc.com",
  integrations: [mdx(), sitemap(), tailwind()],
  image: {
    service: imageService({
      // This can usually be auto-detected
      fallbackService: "netlify",
      placeholder: "blurhash",
      // This is the default
      layout: "constrained",
    }),
  },
});
