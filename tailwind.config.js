/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#a696ff",
        
"secondary": "#aa1714",
        
"accent": "#a4afe8",
        
"neutral": "#221825",
        
"base-100": "#F2F6F8",
        
"info": "#5A75E2",
        
"success": "#1CA051",
        
"warning": "#D27314",
        
"error": "#F53D50",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
