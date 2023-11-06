import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        'body-color': '#071952',
        'btn-color': '#75C2F6'
      },

      fontFamily: {
        fontLanding: ['Poppins', 'sans-serif']
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui(), require('daisyui'), require('tailwind-scrollbar')]
};
export default config;
