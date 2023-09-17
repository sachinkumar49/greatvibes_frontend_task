/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': 'white',
      'lightgray': '#e6e6e6',
      'secondarygray': "#646464",
      'dark': '#212121',
      'white': '#fafafa',
      'error': '#d86161',
      'gray': '#7a7a7a',
      'primary': '#1597e4',
      'black': "#000000"
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      width: {
        "popup": "36.0625rem",
        "45": "49.1%"
      },
      height: {
        "v-full":"100vh",
        popup: "35.25rem"
      },
      margin: {
        "16": "4.5rem"
      }
    },
  },
  plugins: [],
}
