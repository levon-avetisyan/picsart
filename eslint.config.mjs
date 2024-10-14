// eslint.config.mjs
import js from "@eslint/js";
import react from "eslint-plugin-react";
import typescript from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    ignores: ["node_modules/**", "dist/**", "build/**"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        window: "readonly",     // Define `window` as a readonly global variable
        document: "readonly",   // Define `document` as a readonly global variable
        process: "readonly",    // Define `process` as a readonly global variable
        console: "readonly"     // Define `console` as a readonly global variable
      },
    },
    plugins: {
      react,
      "@typescript-eslint": typescript,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescript.configs["recommended"].rules,
      ...react.configs.recommended.rules,
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/prop-types": "off",
      "no-undef": "off" // Disable `no-undef` since globals are defined manually
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  configPrettier,
];
