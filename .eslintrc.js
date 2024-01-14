module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:storybook/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "parser": '@typescript-eslint/parser',
        "project": './tsconfig.json',
        "tsconfigRootDir": __dirname,
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": ["off"],
        "react/display-name": ["off"],
        "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
        "@typescript-eslint/explicit-function-return-type": ["warn"],
        "@typescript-eslint/no-empty-interface": ["off"],
        "react/prop-types": ["warn"],

        'max-len': 'off',
        'semi': 'off',

        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        "@typescript-eslint/consistent-type-imports": ["off"],
        "@typescript-eslint/prefer-nullish-coalescing": ["off"],
        "@typescript-eslint/strict-boolean-expressions": ["off"],
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/no-dynamic-delete": ["warn"],
        "@typescript-eslint/ban-ts-comment": ["warn"],
        "@typescript-eslint/prefer-ts-expect-error": ["warn"],
        "@typescript-eslint/unbound-method": ["warn"],
    }
}
