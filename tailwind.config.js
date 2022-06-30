module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'grab': '3rem',
        'main': '2.5rem',
        'secondary': '2rem',
        'para': '1.2rem',
        'menu': '1rem',
        'tiny': '0.7rem'
      },
      colors: {
        'purple': '#131045',
        'lightpurple': '#AFADC5',
        'offwhite': '#F9F9F9',
        'orange': '#ECA251',
        'pink': '#FD4689'
      },
    },
  },
  plugins: [],
}