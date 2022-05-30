module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'gradient-bg': {
          '0%': { 
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundPosition: '0% 50%'
          }
        }
      },
      animation: {
        'gradient-bg': 'gradient-bg 10s ease infinite'
      },
      backgroundSize: {
        'massive': '400% 400%'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
