import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#9526DA",
        "dark": "#10001A",
        "light": "#D2A1F0",
        "neutral": "#7D7980",
      },
      fontFamily: {
        "secular": ['"Secular One"', 'sans-serif'],
        "advent": ['"Advent Pro"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
