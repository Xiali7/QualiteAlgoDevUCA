// import globals from "globals";
// import pluginJs from "@eslint/js";
// Conversion .mjs-.cjs
const globals = require("globals");
const pluginJs = require("@eslint/js");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [{ languageOptions: { globals: globals.node } }, pluginJs.configs.recommended];
