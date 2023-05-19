/** @type {import('tailwindcss').Config} */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  rules: [
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    },
  ],
}

