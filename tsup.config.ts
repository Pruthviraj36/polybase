import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts", "src/index.css"],
    format: ["cjs", "esm"],
    dts: true,
    clean: true,
    minify: true,
    external: ["react", "react-dom", "framer-motion", "lucide-react", "recharts", "zod"],
    injectStyle: false,
    sourcemap: true,
    banner: {
        js: '"use client";',
    },
});
