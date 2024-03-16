/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '18': '72px',
        '19': '76px',
      },
      height: {
        '19': '76px',
      },
      backgroundColor: {
        'main': '#F5F7FB',
        'main-gradient': '#F8F9FA',
      },
      borderColor: {
        'blue-custom': '#2A355A',
      },
      textColor: {
        'blue-custom': '#2A355A',
      },
      fontSize: {
        '1xl': '22px',
      },
      spacing: {
        '105': '504px',
      }
      
    },
  },
  plugins: [],
}

