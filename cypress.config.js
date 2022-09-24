const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    // setupNodeEvents(on, config) {
    //   baseUrl: "http://localhost:3030";
    // },
    baseUrl: "http://localhost:3030",
  },
  output: {
    filename: "app.bundle.js",
  },
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
  mode: "production",
});
