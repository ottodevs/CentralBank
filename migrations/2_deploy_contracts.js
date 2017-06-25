//var ConvertLib = artifacts.require("./ConvertLib.sol");
//var MetaCoin = artifacts.require("./MetaCoin.sol");
var MultiSigWallet = artifacts.require("./MultiSigWallet.sol");
var TokenContract = artifacts.require("./TokenContract.sol");
var Accounts = web3.eth.accounts;

module.exports = function(deployer) {
//  deployer.deploy(ConvertLib);
//  deployer.link(ConvertLib, MetaCoin);
//  deployer.deploy(MetaCoin);

deployer.deploy(MultiSigWallet, Accounts, 2, 100,"GOLD", 10,"GLD");

/*
                        address[] _owners,
                        uint _required,
                        uint256 _initialSupply,
                        string _tokenName,
                        uint8 _decimalUnits,
                        string _tokenSymbol
*/
