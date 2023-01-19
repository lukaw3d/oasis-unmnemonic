// @ts-check
const staking = require('@oasisprotocol/client/dist/staking')
const { Buffer } = require('buffer')
const nacl = require('tweetnacl')

async function getAddress(privateKeyBase64) {
  const privateKey = Buffer.from(privateKeyBase64, 'base64')
  if (privateKey.length !== 32 && privateKey.length !== 64) throw new Error('Bad private key')
  const publicKey = privateKey.length === 32 ? nacl.sign.keyPair.fromSeed(privateKey).publicKey : nacl.sign.keyPair.fromSecretKey(privateKey).publicKey
  return staking.addressToBech32(await staking.addressFromPublicKey(publicKey))
}

module.exports = { getAddress }
