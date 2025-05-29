// tailwind.config.js
module.exports = {
  content: [
    // ... your content paths
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        naturesPlatterTheme: { // Name your custom theme
          primary: "#179800",
          "primary-content": "#ffffff", // Contrasting text color
          secondary: "#f000b8", // Example: set other colors if needed
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
      "light", // Keep other themes if you use them
      "dark",
      // ... other themes
    ],
  },
  plugins: [require("daisyui")],
};