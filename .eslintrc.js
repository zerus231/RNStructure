module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    "import/resolver": {
      "alias": {
        "extensions": [
          ".js",
          ".jsx"
        ],
        "map": [
          [
            "@src",
            "./src"
          ],
          [
            "@components",
            "./src/components"
          ],
          [
            "@screens",
            "./src/screens"
          ],
          [
            "@utils",
            "./src/utils"
          ],
          [
            "@assets",
            "./src/assets"
          ],
          [
            "@theme",
            "./src/theme"
          ],
          [
            "@constants",
            "./src/constants"
          ],
          [
            "@store",
            "./src/store"
          ]
        ]
      }
    }
  }
};
