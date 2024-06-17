{
  "customSyntax": "postcss-html",
  "extends": [
    "stylelint-config-html",
    "stylelint-config-recommended-scss",
    "stylelint-config-recommended-vue/scss",
    "stylelint-prettier/recommended"
  ],
  "overrides": [
    {
      "files": ["**/*.vue"],
      "customSyntax": "postcss-scss"
    }
  ],
  "plugins": ["stylelint-order", "stylelint-prettier"]
  "rules": {
    "declaration-empty-line-before": "never",
    "font-family-name-quotes": "always-unless-keyword",
    "order/order": ["custom-properties", "declarations"],
    "order/properties-alphabetical-order": true,
    "prettier/prettier": true,
    "selector-class-pattern": [
      "/^[a-z]+(?:-[a-z]+)*(?:_{2}[a-z]+(?:-[a-z]+)*)?(?:-{2}[a-z]+(?:-[a-z]+)*)?$/",
      {
        "resolveNestedSelectors": true
      }
    ]
  }
}
