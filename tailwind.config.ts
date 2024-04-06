import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'black': '#000000',
      'gray': {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      'purple': {
        100: '#F2E4F8',
        200: '#901BC7',
      },
      'gold': '#EDA925',
    },
    fontSize: {
      'xltitle': '60px',
      'ltitle': '40px',
      'mtitle': '31px',
      'header': '26px',
      'headline': '22px',
      'text': '18px',
      'subtext': '15px',
    },
  },
  plugins: [],
};
export default config;
