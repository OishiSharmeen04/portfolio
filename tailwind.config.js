/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  plugins: [
    require("daisyui"),
  ],

  daisyui: {
    themes: [
      {
        oishiTheme: {   // ← YOUR THEME NAME
          "primary": "#6B8E23",
          "secondary": "#809D43",
          "accent": "#C9D99E",
          "neutral": "#1E1E1E",
          "base-100": "#F0F0E0",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },

      "dark", // optional
      "light" // optional
    ],
  },
};
