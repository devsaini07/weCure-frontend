/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      keyframes:{
        zoom:{
          '0%,100%': {transform: 'scale(1)'},
          '50%':{transform: 'scale(1.2)'},
        },
      },
    
    animation:{
      'zoom-delay-1': 'zoom 2s ease-in-out infinite',
      'zoom-delay-2': 'zoom 2s ease-in-out infinite 0.5s',
      'zoom-delay-3': 'zoom 2s ease-in-out infinite 1s',
    },
    },
  },
  plugins: [],
}

