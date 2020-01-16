const contracts = require('./artifacts')().contracts;

const rawTransaction = {
  nonce: 0,
  gasPrice: 100000000000,
  value: 0,
  data: '0x' + contracts.SingletonFactory.SingletonFactory.bin,
  gasLimit: 247000,
  v: 27,
  r: '0x2470000000000000000000000000000000000000000000000000000000002470',
  s: '0x2470000000000000000000000000000000000000000000000000000000002470'
};

module.exports = rawTransaction;
