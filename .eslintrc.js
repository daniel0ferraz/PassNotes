module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: { 'prettier/prettier': ['error', { endOfLine: 'auto' }] },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
      },
    },
  ],
};
