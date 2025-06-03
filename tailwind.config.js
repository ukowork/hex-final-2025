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
      typography: {
        DEFAULT: {
        css: {
          p: {
            color: '#000000',
            'font-size': '1rem',
            'font-weight': 500,
            'line-height': '1.5',
            margin: 0,
          },
          h2: {
            color: '#0027d5',
            'font-size': '1.75rem',
            'font-weight': 700,
            'line-height': '1.5'
          },
          h3: {
            'font-size': '1.25rem',
            'font-weight': 700,
            'line-height': '1.5'
          },
          strong: {
            'font-weight': 'bolder',
          },
          ul: {
            color: '#000000',
            'font-size': '1rem',
            'font-weight': 500,
            'line-height': '1.5',
            'list-style-type': 'disc',
            'list-style-position': 'inside',
            padding: 0,
            margin: 0,
          },
          ol: {
            color: '#000000',
            'font-size': '1rem',
            'font-weight': 500,
            'line-height': '1.5',
            'list-style-type': 'decimal',
            'list-style-position': 'inside',
            padding: 0,
            margin: 0,
          },
          'ol > li': {
            'padding-inline-start': 0,
            padding: 0,
            margin: 0,
          },
          'ul > li': {
            'padding-inline-start': 0,
            padding: 0,
            margin: 0,
          },
          'ol > li::marker': {
            color: '#000000',
          },
          'ul > li::marker': {
            color: '#000000',
          },
          blockquote: {
            'background-color': '#ededed',
            padding: '1.5rem',
            'border-radius': '1.5rem',
          },
          'blockquote > p': {
            'font-style': 'normal',
            color: '#000000',
            'font-size': '1rem',
            'font-weight': 700,
            'line-height': '1.5',
          },
          'blockquote p::before': {
            content: 'none'
          },
          'blockquote p::after': {
            content: 'none'
          },
          a: {
            color: '#0027d5',
            'font-size': '1rem',
            'font-weight': 500,
            'line-height': '1.5',
          },
          img: {
            display: 'block',
            width: '100%',
          }
        }
      }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')]
}