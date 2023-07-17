module.exports = {
    ignorePatterns: ["**/node_modules/*", "**/dist/*", "**/webpack.config.js"],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
};