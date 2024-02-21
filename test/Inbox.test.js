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
const { before, interfaces } = require('mocha');

const { interface, bytecode } = require('../compile')

//Creating an instance of Web3, tells the instance to attempt to connect to the ganache network provide
const web3 = new Web3(ganache.provider());

//todo : READ ABOUT MOCHA FROM DOWN BELOW
/**
 * 1. MOCHA STARTS
 * 2. DEPLOY A NEW CONTRACT [beforeEach]
 * 3. MANIPULATE THE CONTRACT [ it ]
 * 4. MAKE AN ASSERTION ABOUT THE CONTRACT THEN RETURN TO STEP 2 [ it ]
 * 
 **/

let accounts;
let inbox;

beforeEach(async()=>{
    //GET A LIST OF ALL UNLOCKED ACCOUNTS WE CAN SEND AND RECEIVE MONEY TO AND FROM THESE ARE USED BY GANACHE
    accounts = await web3.eth.getAccounts();

    //Use one of the accounts to create the app
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data :  bytecode, arguments: ['Hi There!']})
    .send({from : accounts[0], gas: '1000000'})


});

describe('Inbox', () => {
  it('deploys a contract',()=>{
    console.log(inbox)
  })
})



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

/**
class Car {

    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }

}

let car;

//UTILIZING A BEFORE EACH CALL. THIS DOES INITIALIZATION
beforeEach(()=>{
    console.log('a')
    car = new Car();

});

describe('Car-Test',()=>{

    //This will contain more it tests

    it('Testing-Park',()=>{
        assert.equal(car.park(),'stopped');
    });

    it('Testing-Start',()=>{

        assert.equal(car.drive(),'vroom')


    });

});

**/

/**             RUNNING MOCHA
 * 
 * 1. ADD A SCRIPT TO PACKAGE.json 
 * 
 * 2. REPLACE THE TEST VALUE BY THE WORD 'mocha'
 * 
 * 3. RUN THE COMMAND npm run test
 * 
 * 
 * */


