import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       orange: "#feb273",
       darkBlue:"#1e252b",
       yellow : '#f9f871',
       paleGreen : '#00c897',
       gold: '#ffd700'
      },
    },
  },
  plugins: [],
} satisfies Config;
