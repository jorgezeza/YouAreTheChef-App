import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'secondary': ['var(--stylish)', ...fontFamily.sans]
      },
      colors: {
        primaryColor: '#F41F2D'
      },
      spacing: {
        '74px': '74px'
      }
    },
  },
  plugins: [],
}
export default config
