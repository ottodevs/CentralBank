var multisig = artifacts.require("./MultiSigWallet.sol");
var tokenContract = artifacts.require("./TokenContract.sol");
var multi;
var token;



contract('MultiSig and Token', function(accounts) {


  it("TokenContract deployed successfully", function() {
      return multisig.deployed()
        .then(function(instance){multi = instance; return instance.tokenContract.call(); })
        .then(function(value){token = tokenContract.at(value); console.log("Token Delpoyed at: "+ value);return 0;})

        .then(function(){console.log("MultiSigWallet deployed at: "+ multi.address);})

        .then(function(){ return multi.getOwners(); })
        .then(function(value){console.log("Number of owners: "+ value.length);return 0;})


        .then(function(){ return multi.required.call(); })
        .then(function(value){console.log("Required Signatures: "+ value);return 0;})

        .then(function(){ return token.standard.call(); })
        .then(function(value){console.log("Token Standard: "+ value);return 0;})

        .then(function(){ return token.name.call(); })
        .then(function(value){console.log("Token Name: "+ value);return 0;})

        .then(function(){ return token.symbol.call(); })
        .then(function(value){console.log("Token Symbol: "+ value);return 0;})

        .then(function(){ return token.decimals.call(); })
        .then(function(value){console.log("Token decimals: "+ value);return 0;})

        .then(function(){ return token.totalSupply.call(); })
        .then(function(value){console.log("Token Supply: "+ value);return 0;})

        .then(function(){ return token.owner.call(); })
        .then(function(value){console.log("Token Owner: "+ value);return value;})

        .then(function(value){assert.equal(value, multi.address, "Token owner != multisig");} )

    });


    it("Add Owner", function() {
      // Get a reference to the deployed MetaCoin contract, as a JS object.
      return multisig.deployed()
        .then(function(instance){multi = instance; return instance.tokenContract.call(); })
        .then(function(value){token = tokenContract.at(value); return 0;})

        .then(function(){ return multi.getOwners(); })
        .then(function(value){ for (var i = 0; i < value.length; i++) {
              console.log("Owner "+i+":"+ value[i])};return 0;})

        .then(function(){console.log("Removing owner 0...")
                        return multi.removeOwner(accounts[0]); })

        .then(function(){ return multi.getOwners(); })
        .then(function(value){ for (var i = 0; i < value.length; i++) {
              console.log("Owner "+i+":"+ value[i])};return 0;})



      });


  });
