/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#0F62FE',
        secondary: '#64748b',
        dark: '#0f172a',
        vscode: '#007ACC',
        github: '#181717',
        photoshop: '#31A8FF',
        illustrator: '#FF9A00',
        flutter: '#02569B',
        jquery: '#0769AD',
        react: '#61DAFB',
        tailwindcss: '#06B6D4',
        mysql: '#4479A1',
        php: '#777BB4',
        js: '#F7DF1E',
        laravel: '#FF2D20'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

