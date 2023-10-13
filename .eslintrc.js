module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "quotes": "off",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/semi": "off",
        "react/no-deprecated": "off",
        "@typescript-eslint/indent": [2, 4],
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/promise-function-async": "off",
        "eol-last": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/naming-convention": "off",
    },
}
