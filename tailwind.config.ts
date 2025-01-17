import type { Config } from 'tailwindcss';

import flowbite from 'flowbite/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-nunito)'],
      serif: ['var(--font-nunito)'],
    },
    extend: {
      keyframes: {
        logo: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
        },
      },
      animation: {
        logo: 'logo 3s ease-in-out infinite',
      },
      boxShadow: {
        lg: '0 0px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        card: '1px 2px 11.5px 0px rgba(0, 0, 0, 0.11)',
      },
      dropShadow: {
        '2xl': '40px 0px 21px rgb(61 64 82 / 8%)',
        '3xl': '42px 8px 54px rgba(20, 78, 90, 0.6)',
      },
      colors: {
        'title-default': '#393939',
        'text-default': '#ADADB5',
        'brand-primary': '#DE6C53',
        'chip-title-active': '#FFFFFF',
        'chip-title': '#2E2E2E',
        'chip-background': '#F7F7F8',
        'tag-background': 'rgba(222, 108, 83, 0.2)',
        'flag-text': '#FFFFFF',
        'tag-details-background': '#F7F7F8',
        line: '#DBDBDB',
        black: '#2E2E2E',
        blue: {
          900: '#2D9CDB',
        },
        green: {
          500: '#A6C44A',
        },
        gray: {
          400: '#A098AE',
          300: '#DBDBDB',
          200: '#F5F5F5',
        },
        yellow: {
          500: '#F8B602',
        },
        red: {
          500: '#EB5757',
        },
        purple: {
          500: '#9D1CB2',
        },
      },
    },
  },
  plugins: [flowbite],
};
export default config;
