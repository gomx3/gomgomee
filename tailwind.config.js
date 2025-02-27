import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'media',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Pretendard', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 2s linear infinite',
            },
        },
    },
    plugins: [],
}
