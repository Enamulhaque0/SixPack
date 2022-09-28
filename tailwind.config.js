/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#51db65",
        
"secondary": "#e865f2",
        
"accent": "#e85ce8",
        
"neutral": "#272028",
        
"base-100": "#F6F5F9",
        
"info": "#7E8FDD",
        
"success": "#169C4E",
        
"warning": "#E9A63A",
        
"error": "#F41F3F",
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
