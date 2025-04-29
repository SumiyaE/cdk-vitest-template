import { defineConfig } from "vitest/config";

export default defineConfig({
  root: ".",
  test: {
    root: ".",
    environment: "node",
    include: ["**/*.{test,spec}.ts"],
  }
});
