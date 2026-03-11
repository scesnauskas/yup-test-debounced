import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from "eslint-config-prettier/flat"
import { defineConfig } from 'eslint/config'

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      "semi": 0,
      "no-console": 2,
      "@typescript-eslint/no-shadow": 2,
      "@typescript-eslint/no-unused-vars": 2,
      "@typescript-eslint/no-explicit-any": 0
    }
  },
  {
    ignores: ['dist/**']
  }
)
  