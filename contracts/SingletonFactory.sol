pragma solidity 0.5.11;


/**
 * @author Ricardo Guilherme Schmidt (Status Research & Development GmbH)
 * @notice Singleton Factory (ERC-2470) deploys deterministic addresses based on it's initialization code.
 */
contract SingletonFactory {
    /**
     * @notice Deploys a deterministic address based on `_initCode` and `_salt`.
     * @param _initCode Initialization code.
     * @param _salt Arbitrary value to modify resulting address.
     * @return Created contract address.
     */
    function deploy(bytes memory _initCode, bytes32 _salt)
        public
        returns (address payable createdContract)
    {
        assembly {
            createdContract := create2(0, add(_initCode, 0x20), mload(_initCode), _salt)
        }
    }
}
// IV is value needed to have a vanity address starting with '0x2470'.
// IV: 3018