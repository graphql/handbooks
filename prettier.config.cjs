/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 80,
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      options: {
        proseWrap: 'always',
      },
    },
  ],
};
