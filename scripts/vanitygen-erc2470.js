const ethUtils = require('ethereumjs-util');

module.exports = function vanity(initCode, startsWith="0000", start=0, end=100000000, creator="0x247087a9061f30de86a9E63B68B4e7d8ebf4A51a") {
    for (let index = start; index < end; index++) {
        const salt = ethUtils.setLengthLeft(ethUtils.toBuffer(index),32);
        const address = ethUtils.toChecksumAddress("0x"+ethUtils.generateAddress2(creator, salt, initCode).toString('hex'));
        if(address.toLocaleLowerCase().startsWith("0x"+startsWith.replace("0x","").toLocaleLowerCase())){
            console.log(salt.toString('hex') + ": 0x" + address)
        }   
    }
}