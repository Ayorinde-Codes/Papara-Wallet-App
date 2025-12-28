import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  prettierConfig,
  {
    files: ['**/*.vue', '**/*.js'],
    languageOptions: {
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly'
      }
    },
    plugins: {
      prettier
    },
    rules: {
      'prettier/prettier': 'warn',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/attribute-hyphenation': 'off',
      'no-unused-vars': 'warn',
      'no-undef': 'error'
    }
  },
  {
    ignores: ['dist/**', 'node_modules/**', '*.config.js', 'public/**']
  }
]

