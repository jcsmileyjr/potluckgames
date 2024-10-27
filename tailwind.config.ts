import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'accentRed' : '#9e2a2b',
      'primaryBrown' : '#540b0e',
      'backgroundYellow' : '#FFF3B0',
      'white' : '#FFFFFF',
      'black' : '#000000',
      'blackaccent1' : '#1e1e1e',
      'blackaccent2' : '#4a4a4a',
      'blackaccent3' : '#2c2c2c', 
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/primaryimage.jpeg')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
