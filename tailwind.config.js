/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Gray: {
          "25": "#FCFCFD",
          "50": "#F9FAFB",
          "100": "#F2F4F7",
          "200": "#E4E7EC",
          "300": "#D0D5DD",
          "400": "#98A2B3",
          "500": "#667085",
          "600": "#475467",
          "700": "#344054",
          "800": "#101828",
          "900": "#101828",
        },
        Brand: {
          "25": "#FCFDFF",
          "50": "#E3E8ED",
          "100": "#CAD3DB",
          "200": "#B0BDC8",
          "300": "#97A8B6",
          "400": "#657E92",
          "500": "#32536D",
          "600": "#002949",
          "700": "#00213A",
          "800": "#00192C",
          "900": "#00101D",
        },
        Error: {
          "25": "#FFFBFA",
          "50": "#FEF3F2",
          "100": "#FEE4E2",
          "200": "#FECDCA",
          "300": "#FDA29B",
          "400": "#F97066",
          "500": "#F04438",
          "600": "#D92D20",
          "700": "#B42318",
          "800": "#912018",
          "900": "#7A271A",
        },
      },
      boxShadow: {
        activeElementBoxShadow:
          "0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #E3F6FF",
      },
      fontSize: {
        'lg': ['clamp(1rem, 1vw + 0.125rem, 1.125rem)', { lineHeight: '1.5' }],
        'xl': ['clamp(1.125rem, 1vw + 0.125rem, 1.25rem)', { lineHeight: '1.5' }],
        '2xl': ['clamp(1.25rem, 1vw + 0.25rem, 1.5rem)', { lineHeight: '1.5' }],
        '3xl': ['clamp(1.5rem, 1vw + 0.375rem, 1.875rem)', { lineHeight: '1.5' }],
        '4xl': ['clamp(1.875rem, 1vw + 0.375rem, 2.25rem)', { lineHeight: '1.5' }],
        '5xl': ['clamp(2.25rem, 1vw + 0.5rem, 3rem)', { lineHeight: '1.5' }],
        '6xl': ['clamp(3rem, 1vw + 0.5rem, 3.75rem)', { lineHeight: '1.5' }],
      }
    },
  },
  plugins: [],
}

