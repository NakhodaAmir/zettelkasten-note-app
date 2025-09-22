import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default defineConfig({
  ...eslint.configs.recommended,
  ...tseslint.configs.recommended,
  plugins: {
    "@typescript-eslint": tseslint,
    react: reactPlugin,
    "react-hooks": reactHooksPlugin,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: { version: "detect" }, // Auto-detect React version
  },
});
