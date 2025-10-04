import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      screens: {
        phone: { raw: '(min-width: 301px) and (max-width: 399px)' },
      },
    },
  },
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  plugins: [],
}

export default config
