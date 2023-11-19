module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
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
        "@typescript-eslint/comma-dangle": ["error", "always-multiline"],

        'max-len': 'off',
        'semi': 'off',

        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        "@typescript-eslint/consistent-type-imports": ["off"],
        "@typescript-eslint/prefer-nullish-coalescing": ["off"],
        "@typescript-eslint/strict-boolean-expressions": ["off"]
    }
}
