/* eslint-env node */

const devMode = process.env.NODE_ENV !== "production";

let plugins = [];

if (devMode === false) {
  plugins.push(require("cssnano"));
}

module.exports = {
  plugins
};
