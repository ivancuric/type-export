import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  return {
    build: {
      minify: false,
      sourcemap: true,
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "consumer",
        fileName: "consumer",
      },
    },
  };
});
