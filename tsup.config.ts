import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"], // Xuất cả CommonJS và ESM
  entry: ["./src/index.ts"],
  dts: true,
  shims: true,
  clean: true,
  outExtension({ format }) {
    return format === "esm" ? { js: ".mjs" } : { js: ".cjs" };
  },
});
