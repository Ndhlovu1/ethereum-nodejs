//CONTRACTS USE REAL MONEY, HENCE WE MUST TEST!!
// cBELOW IS THE EXTRA-INFORMATION
/*          SOLIDITY COMPILER

    BYTECODE                                ABI

    DEPLOY                                  FEED JS INTO WEB3


    GANACHE/TestRPC(renamed to Ganache)             <- TEST

    WE WILL BE USING THE GANACHE LIBRARY FOR TESTING OUR CODE AND WE WILL USE


*/
//WEB 3 IS A CONSTRUCTOR FUNCTION, HENCE WE CAP IT
const { Web3 } = require('web3')

const ganache = require('ganache')

const assert = require('assert');//used to make assertions

//Creating an instance of Web3, tells the instance to attempt to connect to the ganache network provide
const web3 = new Web3(ganache.provider());

//Mocha
/** MOCHA - A TEST RUNNING FRAMEWORK (GENERAL PURPOSE TESTING TOOL)
 * 
 * CAN BE USED TO TEST ANY JS AND SOL CODE
 * 
 *          MOCHA FUNTIONS
 * 
 * 1. [ it ] - Run a test and make an assertion(taking two values, the value our code produces and one that we think should be equal to that value)
 * 
 * 2. [ describe ] - Groups together [ it ] functions
 * 
 * 3. [ beforeEach ] - Execute some general setup code, this is a utility function that does similar tasks
 * 
 * 
 */




