import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        'body-color': '#071952',
        'btn-color': '#75C2F6',
        'light':'#FFFFFF',
        "primary":"#0079FF",
        'gray':'#D9D9D9'
      }
    }
  },
  darkMode: 'class',
  plugins: [require('daisyui'), require('tailwind-scrollbar')],
  corePlugins: {
    preflight: false,
  },
};
export default config;
