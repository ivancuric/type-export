import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: false,
      minify: false,
      sourcemap: "inline",
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "core",
        fileName: "core",
      },
    },
  };
});
