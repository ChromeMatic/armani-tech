const tailwind = require('tailwindcss');
module.exports = {
    plugin: [tailwind],
    darkMode: 'class',
    content: ['./src/**/*.html', './src/**/*.vue'],
    theme: {
        extend: {
            fontFamily: {
                ft: "'Spline Sans', sans-serif "
            }
        },
        screens: {
            'xs': '375px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        }
    },
    plugins: [],
}