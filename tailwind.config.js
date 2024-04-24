/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: 'rgb(255, 203, 5)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
