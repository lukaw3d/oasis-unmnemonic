// @ts-check
const hdkey = require('@oasisprotocol/client/dist/hdkey')
const { Buffer } = require('buffer')

function getAdr8PrivateKeys(mnemonic) {
  return Promise.all(new Array(20).fill(0).map(async (_, ix) => {
    const signer = await hdkey.HDKey.getAccountSigner(mnemonic, ix)
    return Buffer.from(signer.secretKey).toString('base64')
  }))
}

module.exports = { getAdr8PrivateKeys }
