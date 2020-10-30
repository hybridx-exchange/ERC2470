# ERC2470 Singleton Factory Contract

## Proposal
The official proposal can be found at: [eips.ethereum.org/EIPS/eip-2470][ERC2470].

## ERC2470 Factory

This repository contains the official implementation of the [ERC2470 factory] as defined in the [standard][ERC2470].

The address of the factory on **all chains** is:

<h4><pre>0x247036903229cf892277dFFd0E734F0037B6B30a</pre></h4>

### Vanity Generator for ERC2470 Singletons

Run the following to generate a few vanity "0x1234" addresses of "SingletonExample.sol":

``` shell
npm run build
node ./scripts/vanitygen-erc2470.js "0x1234"
```

The script simply try salts for the bytecode of that example.

## Compilation & Verification

> :warning: The `solc` compiler version `0.7.3+commit.9bfce1f6` must be present on the build machine. ([More info on installing solc][solc-install].)

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

RawTx:  0xf903638085174876e8008303c4d88080b9034b608060405234801561001057600080fd5b5061032b806100206000396000f3fe60806040526004361061002d5760003560e01c80634af63f02146100c157806355942d831461018557610073565b36610073576040805162461bcd60e51b8152602060048201526011602482015270115490cc8d0dcc0e881898590818d85b1b607a1b604482015290519081900360640190fd5b60006100b56000368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250925061023a915050565b90508060005260206000f35b610169600480360360408110156100d757600080fd5b8101906020810181356401000000008111156100f257600080fd5b82018360208201111561010457600080fd5b8035906020019184600183028401116401000000008311171561012657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550509135925061023a915050565b604080516001600160a01b039092168252519081900360200190f35b34801561019157600080fd5b50610169600480360360408110156101a857600080fd5b8101906020810181356401000000008111156101c357600080fd5b8201836020820111156101d557600080fd5b803590602001918460018302840111640100000000831117156101f757600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050913592506102a8915050565b60008183516020850134f590506001600160a01b0381166102a2576040805162461bcd60e51b815260206004820152601760248201527f455243323437303a2043524541544532206661696c6564000000000000000000604482015290519081900360640190fd5b92915050565b8151602092830120604080516001600160f81b0319818601523060601b6021820152603581019390935260558084019290925280518084039092018252607590920190915280519101209056fea2646970667358221220ddbdfa1bbfd08cf44c1424920bf1d9f7a1c65604d4b972ce106fc8a797d4043a64736f6c634300070300331b83247000822470
Sender:  0x6Bcfd5FD06b4a39407c08532Cd91D2cc2e19C5AB
Contract: 0x247036903229cf892277dFFd0E734F0037B6B30a
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
[ERC2470 factory]: https://github.com/3esmit/ERC2470/blob/master/contracts/ERC2470.sol
[`scripts/vanitygen.sh`]: https://github.com/3esmit/erc2470/blob/master/scripts/vanitygen.sh
[`scripts/vanitygen-info.js`]: https://github.com/3esmit/erc2470/blob/master/scripts/vanitygen-info.js
[3esmit]: https://github.com/3esmit
[jbaylina]: https://github.com/jbaylina
[0xjac]: https://github.com/0xjac
[CC0]: http://creativecommons.org/publicdomain/zero/1.0/
[LICENSE]: https://github.com/3esmit/erc2470/blob/master/LICENSE
[solc-install]: https://solidity.readthedocs.io/en/v0.5.11/installing-solidity.html