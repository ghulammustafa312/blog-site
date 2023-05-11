/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFE',
        lg1: '#EFF0F3',
        lg2: '#E4E5E9',
        gray: '#C0C0C0',
        dg: '#9A9494',
        black: '#2B2C34',
        blue: '#6246EA',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem' /* 10px */,
        xs: '0.75rem' /* 12px */,
        sm: '0.875rem' /* 14px */,
        base: '1rem' /* 16px */,
        lg: '1.125rem' /* 18px */,
        xl: '1.25rem' /* 20px */,
        '2xl': '1.5rem' /* 24px */,
        '3xl': '1.875rem' /* 30px */,
        '4xl': '2.25rem' /* 36px */,
        '5xl': '3rem' /* 48px */,
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [],
};
