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
      'white' : '#FFFFFF',
      'black' : '#000000',
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
