import type { Config } from "tailwindcss";

import flowbitePlugin from 'flowbite/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    "./node_modules/flowbite/dist/**/*.js",
    "./node_modules/flowbite-react/dist/**/*.mjs",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [flowbitePlugin],
};
export default config;
