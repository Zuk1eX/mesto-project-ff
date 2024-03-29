const autopprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  plugins: [autopprefixer, cssnano({ preset: "default" })],
};
