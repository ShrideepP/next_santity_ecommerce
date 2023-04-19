/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'accent': '#F43F5E',
                'dominant': '#1F1F1F',
                'compliment': '#3D3D3D',
                'primary': '#E6EAEF',
                'secondary': '#F9FAFB',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
};