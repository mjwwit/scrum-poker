module.exports = {
    "automock": false,
    "setupFiles": [
      "<rootDir>/test-setup.js"
    ],
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "<rootDir>/test-preprocessor.js"
    },
    "testMatch": [
      "**/**/*.spec.(ts|tsx|js)"
    ]
  }
