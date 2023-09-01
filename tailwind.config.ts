import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Inter', 'serif']
    },
    extend: {

    },
    screens: {
      'xs': '360px',
      // => @media (min-width: 360px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }

    },
    colors: {
      'primary': '#5570F1',
      'secondary': {
        default: '#FFCC91',
        100: '#FEF9F2',
        200: '#FEF5EA',
        300: '#FFF2E2',
        400: '#FFF0DE',
        500: '#FFEAD1',
        600: '#FFE5C8',
        700: '#FFDFBA',
        800: '#FFDAAE',
        900: '#FFD29E',
      },
      'hov': '#E9ECF8E5',
      'fill': '#EFF1F999',
      'err': '#FCF3F2B2',
      'danger': '#F57E77',
      'grey': '#5E63661A',
      'grey-1': '#E1E2E9',
      'white-yellow': '#FFCC9133',
      'stroke': '#F1F3F9',
      'black': {
        default: '#1C1D22',
        100: '#BEC0CA',
        200: '#A6A8B1',
        300: '#8B8D97',
        400: '#6E7079',
        500: '#53545C',
        600: '#45464E',
        700: '#37393F',
        800: '#33343A',
        900: '#2C2D33',
        950: 'rgba(239, 241, 249, 0.60)'
      },
      'success': '#519C66',
      'deny': '#CC5F5F',
      'main': '#F4F5FA',
      'white': '#FFF',
      'pressed': '#5B6EC6',
      'hover': '#304bc7'
    },
    backgroundImage: {
      'arrow-pattern': "url('/image/fi_chevron-down.svg')",
    }

  },
  plugins: [],
}

export default config