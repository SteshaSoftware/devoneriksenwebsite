/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
      ],
    },
  },
  // plugins: [ require('@tailwindcss/aspect-ratio')],
}