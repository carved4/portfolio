import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        text: 'var(--text)',
        dimWhite: "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        jetbrains: ['var(--font-jetbrains)'],
        code: ['var(--font-fira)'],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
