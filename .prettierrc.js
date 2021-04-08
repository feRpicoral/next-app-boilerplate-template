/*
 @stockvio/eslint-config already configures prettier, therefore running eslint --fix
 will already run prettier. This is the default config being used in @stockvio/eslint-config,
 any changes made to these properties will be overwritten if you use @stockvio/eslint-config.

 Don't lint your files with prettier --write, use eslint --fix instead.

 If you don't add any new options, you can safely remove this file.
*/
module.exports = {
    arrowParens: 'avoid',
    trailingComma: 'none',
    tabWidth: 4,
    singleQuote: true
};