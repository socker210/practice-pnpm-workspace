module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.ts?(x)'],
      extends: ['plugin:@typescript-eslint/recommended'],
    },
    {
      files: ['*.[jt]sx'],
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
      ],
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
}
