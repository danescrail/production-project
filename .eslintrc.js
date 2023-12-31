module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },

    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:storybook/recommended"
    ],

    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",

    },
    "plugins": [
        "react",
        "i18next",
        "react-hooks"
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
        "i18next/no-literal-string": ['error', { markupOnly: true }],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
        "react/display-name": "off",
        "@typescript-eslint/no-invalid-void-type": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/prefer-ts-expect-error": "off",
        "@typescript-eslint/prefer-includes": "off"
    },
    "ignorePatterns": ["scripts", "json-server"],
}
