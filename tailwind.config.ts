import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      helvetica: ["var(--font-helvetica)"],
      "helvetica-bold": ["var(--font-helvetica-bold)"],
      "helvetica-light": ["var(--font-helvetica-light)"],
    },
    extend: {
      backgroundImage: {
        register:
          "url('./assets/bg-register-page.png'), url('./assets/bg-register2-page.png')",
      },
    },
  },
  plugins: [],
};
export default config;
