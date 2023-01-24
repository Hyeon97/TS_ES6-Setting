module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    // Airbnb style guide 적용
    'airbnb-base',
    // TypeScript ESLint recommanded style 적용
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  rules: {
    'linebreak-style': 0,
    semi: 0,
    'no-console': 0,
  },
}
