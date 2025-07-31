import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#03A678',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
} satisfies Config
