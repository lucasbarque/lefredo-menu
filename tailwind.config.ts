import flowbite from 'flowbite/plugin';
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
            serif: ['Poppins', 'serif'],
        },
        extend: {
            fontSize: {
                'heading-xs': [
                    '0.875rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '0',
                        fontWeight: 'bold',
                    },
                ],
                'heading-sm': [
                    '1.125rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '0',
                        fontWeight: 'bold',
                    },
                ],
                'heading-md': [
                    '1.5rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '0',
                        fontWeight: 'bold',
                    },
                ],
                'heading-lg': [
                    '2rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '0',
                        fontWeight: 'bold',
                    },
                ],
                'heading-xg': [
                    '2.25rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '0',
                        fontWeight: 'bold',
                    },
                ],
                'regular-xs': [
                    '0.875rem',
                    {
                        lineHeight: '120%',
                        letterSpacing: '0',
                        fontWeight: 400,
                    },
                ],
                'regular-1xs': [
                    '0.875rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '0',
                        fontWeight: 400,
                    },
                ],
                'regular-sm': [
                    '1.125rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '0',
                        fontWeight: 400,
                    },
                ],
                'medium-xs': [
                    '0.875rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '0',
                        fontWeight: 500,
                    },
                ],
                'medium-sm': [
                    '1.125rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '0',
                        fontWeight: 500,
                    },
                ],
                'sb-xs': [
                    '0.875rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '0',
                        fontWeight: 600,
                    },
                ],
                'sb-sm': [
                    '1.125rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '0',
                        fontWeight: 600,
                    },
                ],
            },
            boxShadow: {
                lg: '0 0px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            },
            dropShadow: {
                '2xl': '40px 0px 21px rgb(61 64 82 / 8%)',
                '3xl': '42px 8px 54px rgba(20, 78, 90, 0.6)',
            },
            colors: {
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
