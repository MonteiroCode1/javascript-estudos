import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node 
      },
      sourceType: "commonjs" 
    },
    rules: {
      ...js.configs.recommended.rules,
      "semi": ["error", "always"],
      "no-unused-vars": "warn"
    }
  }
];
