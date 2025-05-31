module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        wrap: {
          DEFAULT: '#fbfbfb',
          gray: '#f1f1f1'
        },
        brand: '#0027d5',
        content: '#4b4b4b',
        line: '#6c757d',
      },
      fontSize: {
        "fs-2": [
          "2rem",
          {
            fontWeight: "500",
            lineHeight: "1.5",
          },
        ],
        "fs-1.75": [
          "1.75rem",
          {
            fontWeight: "500",
            lineHeight: "1.5",
          },
        ],
        "fs-1.75-bold": [
          "1.75rem",
          {
            fontWeight: "700",
            lineHeight: "1.5",
          },
        ],
        "fs-1.5": [
          "1.5rem",
          {
            fontWeight: "500",
            lineHeight: "1.5",
          },
        ],
        "fs-1.5-bold": [
          "1.5rem",
          {
            fontWeight: "700",
            lineHeight: "1.5",
          },
        ],
        "fs-1.25": [
          "1.25rem",
          {
            fontWeight: "500",
            lineHeight: "1.5",
          },
        ],
        "fs-1.25-bold": [
          "1.25rem",
          {
            fontWeight: "700",
            lineHeight: "1.5",
          },
        ],
        "fs-1": [
          "1rem",
          {
            fontWeight: "500",
            lineHeight: "1.5",
          },
        ],
        "fs-1-bold": [
          "1rem",
          {
            fontWeight: "700",
            lineHeight: "1.5",
          },
        ],
      },
    },
  },
  plugins: [],
}