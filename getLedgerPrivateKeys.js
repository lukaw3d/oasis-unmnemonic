// @ts-check
const { hdKeyDerivation } = require('@zondax/ledger-substrate/src/index')

function getLedgerPrivateKeys(mnemonic) {
  return new Array(20).fill(0).map((_, ix) => {
    const params = {
      mnemonic: mnemonic,
      password: '',
      slip0044: 474 + 0x80000000,
      accountIndex: 0 + 0x80000000,
      changeIndex: 0 + 0x80000000,
      addressIndex: ix + 0x80000000,
      ss58prefix: '',
    }
    const response = hdKeyDerivation(params.mnemonic, params.password, params.slip0044, params.accountIndex, params.changeIndex, params.addressIndex, params.ss58prefix)
    return response.sk.toString('base64')
  })
}

module.exports = { getLedgerPrivateKeys }
