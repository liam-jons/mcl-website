/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // New brand colors
        primary: {
          // Powerful Purple
          DEFAULT: '#652066',
          50: '#f8f0f8',
          100: '#f0e0f0',
          200: '#e0c0e0',
          300: '#c090c0',
          400: '#a060a0',
          500: '#834084',
          600: '#652066',
          700: '#541055',
          800: '#430844',
          900: '#320633',
        },
        coral: {
          // Confident Coral
          DEFAULT: '#eb5c5d',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#eb5c5d',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        midnight: {
          // Motivated Midnight
          DEFAULT: '#0a3a49',
          50: '#f0f7fa',
          100: '#e0eff4',
          200: '#b3d7e0',
          300: '#7ab3c4',
          400: '#3a8da6',
          500: '#206a82',
          600: '#0a3a49',
          700: '#072e3b',
          800: '#05222c',
          900: '#03171e',
        },
        blue: {
          // Brave Blue
          DEFAULT: '#00acc9',
          50: '#f0fafc',
          100: '#e0f5fa',
          200: '#b3e6f2',
          300: '#7ad1e6',
          400: '#3bbbd9',
          500: '#00acc9',
          600: '#0089a1',
          700: '#006b7d',
          800: '#004d59',
          900: '#002e35',
        },
      },
      fontFamily: {
        // Updated font families
        'sans': ['Kohinoor Bangla', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
        'headline': ['Korolev Condensed Heavy', 'Impact', 'Arial Black', 'sans-serif'],
        'standout': ['Library 3am Soft', 'Georgia', 'serif'],
        'opendyslexic': ['OpenDyslexic', 'sans-serif'],
      },
    },
  },
  // Improved performance for development
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}
