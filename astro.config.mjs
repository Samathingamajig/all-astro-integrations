import { defineConfig } from "astro/config";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";
import angular from "@analogjs/astro-angular";
// import lit from "@astrojs/lit";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs(),
    angular(),
    // lit(),
    preact(),
    react(),
    solidJs(),
    svelte(),
    vue(),
  ],
});
