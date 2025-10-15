/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#570df8",
          "secondary": "#f000b8",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#F3F4F6", // <-- couleur de fond principale pour tout le dashboard
          "base-200": "#e5e7eb", // pour cartes ou sections légèrement plus foncées
          "base-300": "#d1d5db", // pour éléments encadrés
          "base-content": "#111827", // couleur du texte principal
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
};
