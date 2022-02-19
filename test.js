// @ts-check
const { getPrivateKeys } = require('./getPrivateKeys.js')

const privateKeys = getPrivateKeys('test test test test test test test test test test test test test test test test test test test test test test fun test')
console.log('private keys')
console.log(privateKeys.join('\n'))
