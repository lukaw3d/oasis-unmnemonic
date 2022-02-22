// @ts-check
const assert = require('assert')
const { getPrivateKeys } = require('./getPrivateKeys.js')
// const { hdKeyDerivation } = require('@zondax/ledger-substrate/dist/index')

const privateKeys = getPrivateKeys('test test test test test test test test test test test test test test test test test test test test test test fun test')
console.log('private keys')
console.log(privateKeys.join('\n'))

assert.equal(privateKeys[0], 'mEKxtuhFGRSBmjF/D3VCSCbmKOrNaabdEpgKvRATXlg=')
assert.equal(privateKeys[1], 'oHumu4kyxdYbIlOZnItEHFnNQndBGCsEQaynNBMTXlg=')
