/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      clip: {
        'full': 'rect(0, 10px, 10px, 0)',
      },
    },
  },
  plugins: [],
}

