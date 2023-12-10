import type { Config } from 'tailwindcss'

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  // important: '#root',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'delo-gothic': ['Dela Gothic One', 'cursive'],
        'albert-sans': ['Albert Sans', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}
export default config
