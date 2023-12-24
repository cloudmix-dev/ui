// vite.config.mts
import path from "node:path";
import { defineConfig } from "file:///Users/samuellaycock/Development/Cloudmix/ui/node_modules/.pnpm/vite@5.0.10_@types+node@18.19.3/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/samuellaycock/Development/Cloudmix/ui/node_modules/.pnpm/vite-plugin-dts@3.6.4_@types+node@18.19.3_typescript@5.3.3_vite@5.0.10/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var package_default = {
  name: "@cloudmix-dev/tailwind",
  version: "0.0.9",
  files: [
    "dist"
  ],
  main: "./dist/index.cjs.js",
  module: "./dist/index.es.mjs",
  types: "./dist/index.d.ts",
  exports: {
    ".": {
      import: {
        types: "./dist/index.d.ts",
        default: "./dist/index.es.mjs"
      },
      require: {
        types: "./dist/index.d.ts",
        default: "./dist/index.cjs.js"
      }
    }
  },
  scripts: {
    dev: "vite",
    build: "tsc && vite build",
    preview: "vite preview",
    prepare: "npm run build"
  },
  dependencies: {
    "@tailwindcss/container-queries": "~0.1.1",
    "@tailwindcss/typography": "~0.5.10",
    "lodash.merge": "~4.6.2",
    tailwindcss: "~3.4.0"
  },
  devDependencies: {
    "@types/lodash.merge": "~4.6.9",
    "vite-plugin-dts": "~3.6.4"
  },
  engines: {
    node: ">=18.0.0"
  }
};

// vite.config.mts
var __vite_injected_original_dirname = "/Users/samuellaycock/Development/Cloudmix/ui/packages/tailwind";
var vite_config_default = defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "Cloudmix Tailwind Config",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.${format === "cjs" ? "js" : "mjs"}`
    },
    rollupOptions: {
      external: [
        ...Object.keys(package_default.dependencies),
        ...Object.keys(package_default.devDependencies)
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIiwgInBhY2thZ2UuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9zYW11ZWxsYXljb2NrL0RldmVsb3BtZW50L0Nsb3VkbWl4L3VpL3BhY2thZ2VzL3RhaWx3aW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc2FtdWVsbGF5Y29jay9EZXZlbG9wbWVudC9DbG91ZG1peC91aS9wYWNrYWdlcy90YWlsd2luZC92aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3NhbXVlbGxheWNvY2svRGV2ZWxvcG1lbnQvQ2xvdWRtaXgvdWkvcGFja2FnZXMvdGFpbHdpbmQvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHBhdGggZnJvbSBcIm5vZGU6cGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuXG5pbXBvcnQgcGtnIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgZHRzKHtcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaW5kZXgudHNcIiksXG4gICAgICBuYW1lOiBcIkNsb3VkbWl4IFRhaWx3aW5kIENvbmZpZ1wiLFxuICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJjanNcIl0sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT5cbiAgICAgICAgYGluZGV4LiR7Zm9ybWF0fS4ke2Zvcm1hdCA9PT0gXCJjanNcIiA/IFwianNcIiA6IFwibWpzXCJ9YCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXG4gICAgICAgIC4uLk9iamVjdC5rZXlzKHBrZy5kZXBlbmRlbmNpZXMpLFxuICAgICAgICAuLi5PYmplY3Qua2V5cyhwa2cuZGV2RGVwZW5kZW5jaWVzKSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwgIntcbiAgXCJuYW1lXCI6IFwiQGNsb3VkbWl4LWRldi90YWlsd2luZFwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuOVwiLFxuICBcImZpbGVzXCI6IFtcbiAgICBcImRpc3RcIlxuICBdLFxuICBcIm1haW5cIjogXCIuL2Rpc3QvaW5kZXguY2pzLmpzXCIsXG4gIFwibW9kdWxlXCI6IFwiLi9kaXN0L2luZGV4LmVzLm1qc1wiLFxuICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIixcbiAgXCJleHBvcnRzXCI6IHtcbiAgICBcIi5cIjoge1xuICAgICAgXCJpbXBvcnRcIjoge1xuICAgICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIixcbiAgICAgICAgXCJkZWZhdWx0XCI6IFwiLi9kaXN0L2luZGV4LmVzLm1qc1wiXG4gICAgICB9LFxuICAgICAgXCJyZXF1aXJlXCI6IHtcbiAgICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9pbmRleC5kLnRzXCIsXG4gICAgICAgIFwiZGVmYXVsdFwiOiBcIi4vZGlzdC9pbmRleC5janMuanNcIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImRldlwiOiBcInZpdGVcIixcbiAgICBcImJ1aWxkXCI6IFwidHNjICYmIHZpdGUgYnVpbGRcIixcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIixcbiAgICBcInByZXBhcmVcIjogXCJucG0gcnVuIGJ1aWxkXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHRhaWx3aW5kY3NzL2NvbnRhaW5lci1xdWVyaWVzXCI6IFwifjAuMS4xXCIsXG4gICAgXCJAdGFpbHdpbmRjc3MvdHlwb2dyYXBoeVwiOiBcIn4wLjUuMTBcIixcbiAgICBcImxvZGFzaC5tZXJnZVwiOiBcIn40LjYuMlwiLFxuICAgIFwidGFpbHdpbmRjc3NcIjogXCJ+My40LjBcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAdHlwZXMvbG9kYXNoLm1lcmdlXCI6IFwifjQuNi45XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCJ+My42LjRcIlxuICB9LFxuICBcImVuZ2luZXNcIjoge1xuICAgIFwibm9kZVwiOiBcIj49MTguMC4wXCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4VyxPQUFPLFVBQVU7QUFDL1gsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTOzs7QUNGaEI7QUFBQSxFQUNFLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLE9BQVM7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBUTtBQUFBLEVBQ1IsUUFBVTtBQUFBLEVBQ1YsT0FBUztBQUFBLEVBQ1QsU0FBVztBQUFBLElBQ1QsS0FBSztBQUFBLE1BQ0gsUUFBVTtBQUFBLFFBQ1IsT0FBUztBQUFBLFFBQ1QsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLFNBQVc7QUFBQSxRQUNULE9BQVM7QUFBQSxRQUNULFNBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVc7QUFBQSxJQUNULEtBQU87QUFBQSxJQUNQLE9BQVM7QUFBQSxJQUNULFNBQVc7QUFBQSxJQUNYLFNBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxjQUFnQjtBQUFBLElBQ2Qsa0NBQWtDO0FBQUEsSUFDbEMsMkJBQTJCO0FBQUEsSUFDM0IsZ0JBQWdCO0FBQUEsSUFDaEIsYUFBZTtBQUFBLEVBQ2pCO0FBQUEsRUFDQSxpQkFBbUI7QUFBQSxJQUNqQix1QkFBdUI7QUFBQSxJQUN2QixtQkFBbUI7QUFBQSxFQUNyQjtBQUFBLEVBQ0EsU0FBVztBQUFBLElBQ1QsTUFBUTtBQUFBLEVBQ1Y7QUFDRjs7O0FEeENBLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLGtCQUFrQjtBQUFBLElBQ3BCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDN0MsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3JCLFVBQVUsQ0FBQyxXQUNULFNBQVMsTUFBTSxJQUFJLFdBQVcsUUFBUSxPQUFPLEtBQUs7QUFBQSxJQUN0RDtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1IsR0FBRyxPQUFPLEtBQUssZ0JBQUksWUFBWTtBQUFBLFFBQy9CLEdBQUcsT0FBTyxLQUFLLGdCQUFJLGVBQWU7QUFBQSxNQUNwQztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
