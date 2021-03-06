/* eslint-env node */

module.exports = {
  env: {
    client: {
      presets: [
        [
          "@babel/preset-env", {
            modules: false,
            corejs: 3,
            useBuiltIns: "usage"
          }
        ],
        [
          "@babel/preset-react", {
            pragma: "h"
          }
        ]
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import"
      ]
    },
    clientModern: {
      presets: [
        [
          "@babel/preset-env", {
            modules: false,
            targets: {
              esmodules: true
            }
          }
        ],
        [
          "@babel/preset-react", {
            pragma: "h"
          }
        ]
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import"
      ]
    },
    server: {
      presets: [
        [
          "@babel/preset-env", {
            modules: false,
            targets: {
              node: "current"
            }
          }
        ],
        [
          "@babel/preset-react", {
            pragma: "h"
          }
        ]
      ]
    }
  }
};
