module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb",
        "plugin:jest/recommended",
        "jest-enzyme",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "6",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "babel",
        "import",
    ],
    "rules": {
    }
}
