/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#3FAE7A',
                secondary: '#646FE3',
                backgroundColor: '#f9fafb',
                red: {
                    500: '#FF3D2E',
                },
                gray: {
                    25: '#DFE1E9',
                    200: '#DFE1E9',
                    500: '#63698C',

                    900: '#20222D',
                },
            },
        },
    },
    plugins: [],
};
