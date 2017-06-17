pragma solidity ^0.4.8;
import MultisigWallet.sol;
import Token.sol;


Contract Factory {

    /*Public variables*/
    address public multiSigAddress;
    address public tokenContractAddress;
    address public creator;

    /*Constructor*/
    function Factory {
      creator = msg.sender;
    }

    function createTokenAndMultisig (
      uint256 initialSupply,
      string tokenName,
      uint8 decimalUnits,
      string tokenSymbol,
      address[] intitialOwners;
      uint initialSignaturesRequired
      )
      public
    {
        multiSigAddress = new MultisigWallet();
        tokenContractAddress = new Token();
    }

}
