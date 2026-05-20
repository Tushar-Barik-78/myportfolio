// tailwind.config.js
import { defineConfig } from "tailwindcss";

export default defineConfig({
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%, 100%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.5)" },
          "66%": { transform: "scale(0.8)" },
        },
      },
      animation: {
        blob: "blob 2s infinite ease-in-out",
      },
    },
  },
});
