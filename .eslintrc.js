module.exports = {
  plugins: ['prettier'],
  extends: ['next/core-web-vitals'],
  rules: {
    'no-console': 'error',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
  },
};
