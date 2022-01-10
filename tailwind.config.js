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
    },
    plugins: [],
}