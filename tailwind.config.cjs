/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{jsx,js}', './index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                roboto: ['roboto', 'serif'],
                plus: ['"M PLUS Rounded 1c"', 'serif'],
            },
            colors: {
                white: '#FFFFFF',
                purple: '#E02BCB',
                orange: '#E07A5F',
                'black-bg': '#202023',
                'light-bg': '#f0e7db',
                midnight: '#2D3748',
                'strong-gray': '#525252',
                'yellow-sun': '#FBD38D',
                'dark-yellow': '#ED8936',
                'moon-purple': '#805AD5',
                'dark-moon': '#553c9a',
                'body-text': '#1A202C',
            },
            boxShadow: {
                ext: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
            },
        },
    },
    plugins: [],
}
