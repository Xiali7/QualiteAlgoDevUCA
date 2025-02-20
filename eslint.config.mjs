import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                require: "readonly",
                module: "readonly",
                console: "readonly",
                process: "readonly"
            }
        },
        rules: {
            indent: ["error", 4],
            quotes: ["error", "double"],
            semi: ["error", "always"],
            "comma-dangle": ["error", "never"],
            "max-len": ["error", { code: 180 }],
            "no-unused-vars": ["warn"]
        }
    }
];
