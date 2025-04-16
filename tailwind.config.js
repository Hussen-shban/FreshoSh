/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        freshoOrange: 'rgb(214, 85, 38)',
        card: '#2A2A2A',
        blacko:'#242121',
        SecondaryText:'#B3B3B3',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
        bla: 'rgba(0 ,0 ,0, 0.15)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

      },
      fontFamily: {
        poppins: [
          'Poppins',
          'sans-serif'
        ],
        alexandria: ['Alexandria', 'serif'],
        lilita: ['Lilita One', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '900px',
      lg: '1200px',
      xl: '1700px'
    }
  },
};