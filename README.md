# ERC2470 Singleton Factory Contract

## Proposal
The official proposal can be found at: [eips.ethereum.org/EIPS/eip-2470][ERC2470].

## ERC2470 Factory

This repository contains the official implementation of the [ERC2470 factory] as defined in the [standard][ERC2470].

The address of the factory on **all chains** is:

<h4><pre>0x247034FdD2F7C2Ca1EA5184025904d6D2265b084</pre></h4>

## Compilation & Verification

> :warning: The `solc` compiler version `0.5.11+commit.22be8592` must be present on the build machine. ([More info on installing solc][solc-install].)

The factory can be compiled from the source code using:

``` shell
npm run build
```

This will write the json artifacts for the factory in the `artifacts` folder and the standard output in the `build` folder.

### Verification

The address of the account creating the factory, the address of the factory and the raw signed transaction can be generated with:

``` shell
$ npm run info
> node js/info.js

RawTx:  0xf901a28085174876e8008303c4d88080b9014f608060405234801561001057600080fd5b5061012f806100206000396000f3fe6080604052348015600f57600080fd5b506004361060275760003560e01c806277436014602c575b600080fd5b60cc60048036036020811015604057600080fd5b810190602081018135640100000000811115605a57600080fd5b820183602082011115606b57600080fd5b80359060200191846001830284011164010000000083111715608c57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955060e8945050505050565b604080516001600160a01b039092168252519081900360200190f35b6000808251602084016000f59291505056fea265627a7a723158203c7f8125b1690d4dae47f7a451325cd221c215918f2e9a9baee784b3402e9a1f64736f6c634300050b00321ba02470000000000000000000000000000000000000000000000000000000002470a02470000000000000000000000000000000000000000000000000000000002470
Sender:  0x38caaE3E876adbB947C7319b971BABbd127B95ad
Contract: 0x247034FdD2F7C2Ca1EA5184025904d6D2265b084
```

Those values can be compared with the values in the [ERC2470 standard][ERC2470].

### Metadata

The metadata---for the factory only---can be extrated using:

``` shell
node scripts/extract_metadata.js
```

This metadata can also be compared with the formated version in the [ERC2470 standard][ERC2470].

### Vanity address

The vanity address of the factory---starting with `0x2470`---has been generated using the [`scripts/vanitygen.sh`] and [`scripts/vanitygen-info.js`] scripts.

## Authors
 - Ricardo Guilherme Schmidt [@3esmit][3esmit]
 - Jordi Baylina [@jbaylina][jbaylina]
 - Jacques Dafflon [@0xjac][0xjac]

## License

> The [ERC2470 factory] is part of the  [ERC2470 standard][ERC2470] and is therefore in the public domain via [CC0].

The authors waive all copyright and related or neighboring rights for the rest of this repository's content via [CC0]. A copy of the [CC0] waiver is included in the [LICENSE] file.

[ERC820]: https://eips.ethereum.org/EIPS/eip-820
[ERC2470]: https://eips.ethereum.org/EIPS/eip-2470
[ERC2470 factory]: https://github.com/3esmit/ERC2470/blob/master/contracts/SingletonFactory.sol
[`scripts/vanitygen.sh`]: https://github.com/3esmit/erc2470/blob/master/scripts/vanitygen.sh
[`scripts/vanitygen-info.js`]: https://github.com/3esmit/erc2470/blob/master/scripts/vanitygen-info.js
[3esmit]: https://github.com/3esmit
[jbaylina]: https://github.com/jbaylina
[0xjac]: https://github.com/0xjac
[CC0]: http://creativecommons.org/publicdomain/zero/1.0/
[LICENSE]: https://github.com/3esmit/erc2470/blob/master/LICENSE
[solc-install]: https://solidity.readthedocs.io/en/v0.5.11/installing-solidity.html