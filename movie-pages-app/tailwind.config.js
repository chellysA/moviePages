/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        principal: {
          100: '#000000CC',
          200: '#00acc1',
          300: '#0080ff',
          400: '#0066cc',
          500: '#006BD7',
          600: '#0059b3',
          700: '#004d99',
          800: '#004080',
          900: '#003366',
        },

        white: '#fff',
        terteary: '#F1F8FF',
        black: '#000',
        white: '#fff',
        secondary: '#051626',
        blueDark: '#051626',
        terteary: '#F1F8FF',
        black: '#000',
        gray: {
          10: '#212529',
          50: '#d1d1d182',
          100: '#bec3c5',
          200: '#edf2f7',
          300: '#e2e8f0',
          350: '#CED4DA',
          400: '#cbd5e0',
          450: '#CFCFCF',
          500: '#a0aec0',
          600: '#718096',
          650: '#666565',
          700: '#4a5568',
          800: '#2d3748',
          850: '#4F4F4F',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
          1111: '#006BD7',
        },
        red: {
          1000: '#EB1B1B',
        },
      },
    },

    plugins: [],
  },
};
