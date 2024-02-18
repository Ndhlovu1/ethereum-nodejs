//Compile the Contract

// A BASIC WALK-DOWN OF THE COMPILATION PROCESS

// 1. WE CREATE A "CONTRACT SOURCE" THAT IS THEN CONVERTED BY THE
// 2. SOLIDITY COMPILER, WHICH SPITS OUT TWO EXTRA FILES
// 3. THE ABI - THIS IS THE JS VERSION OF OUR CODE
// 4. CONTRACT BYTECODE - THIS IS THE COMPUTER READ LANGUAGE WHICH IS SENT TO OUR NETWORK
//AFTER RUNNING THE APP - THE INTERFACE IS THE ABI THAT LISTS THE
// 1. ALL DIFFERENT FUNCTIONS,AND THEIR INPUTS AND OUTPUTS
// 2. HOW MANY ARGUMENTS AND THEIR TYPES,
// 3. WHAT RETURN VALUES AND THE THEIR TYPES

// WE WILL ONLY USE THE BYTECODE(THIS IS DEPLOYED) AND THE INTERFACE(ABI)

//TO INSTALL THE SOLIDITY COMPILER
// npm install solc@0.4.17 (This is simply the version for this compiler)

// IN ORDER FOR US TO USE THE COMPILER - WE SHOULD ACCESS THE FILE FROM THE HARDDRIVE WITH THE NODEJS __DIRNAME
const path = require('path');// Offers Cross Platform system as it always starts in the holding directory

const fs = require('fs');
const solc = require('solc');

//IMPORT THE SOLIDITY COMPILER

const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol');

// READ THE FILE CONTENTS OF THE CONTRACT
const contract_source = fs.readFileSync(inboxPath,"utf8");



//Compile the file
module.exports = solc.compile(contract_source,1).contracts[':Inbox'];
//console.log(solc.compile(contract_source,1).contracts[':Inbox'])



