//used to deply smart contracts
//artifacts are bytecode and ABI

const ABC = artifacts.require("ABC");

module.exports = function(deployer) {
  deployer.deploy(ABC);
};


