const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest", // Supporte les dernières fonctionnalités JS
            sourceType: "module", // Indique que ton projet utilise des modules ES
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
