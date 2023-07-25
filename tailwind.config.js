/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ff00f2",
          "secondary": "#ff7300",
          "accent": "#cafc03",
          "neutral": "#191a3e",
          "base-100": "#fafafa",
          "info": "#4f46ff",
          "success": "#05ff69",
          "warning": "#fafa47",
          "error": "#ff1d48",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],

}
