import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh"; // Import dla react-refresh

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"], // Określenie plików
    languageOptions: {
      ecmaVersion: "latest", // Ustawienie wersji ECMAScript
      sourceType: "module", // Typ modułu
      globals: globals.browser, // Globalne zmienne dla przeglądarki
    },
    settings: {
      react: {
        version: "18.2", // Ustawienie wersji Reacta
      },
    },
    plugins: {
      react: pluginReact, // Plugin dla Reacta
      "react-hooks": pluginReactHooks, // Plugin dla React Hooks
      "react-refresh": pluginReactRefresh, // Plugin dla React Refresh
    },
    rules: {
      "react/prop-types": "off", // Wyłączenie prop-types
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }, // Dodatkowa reguła dla react-refresh
      ],
    },
    ignores: ["dist", ".eslintrc.cjs"], // Ignorowane foldery
  },
  pluginJs.configs.recommended, // Zalecana konfiguracja ESLint
  pluginReact.configs.flat.recommended, // Zalecana konfiguracja dla React
];