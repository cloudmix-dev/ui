import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Cloudmix Tailwind Config",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "@tailwindcss/container-queries",
        "@tailwindcss/typography",
        "lodash.merge",
        "tailwindcss",
        "tailwindcss/colors",
        "tailwindcss/defaultTheme",
        "tailwindcss/plugin",
      ],
    },
  },
});
