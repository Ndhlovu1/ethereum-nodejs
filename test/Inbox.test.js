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

const INITIAL_MSG = "Hi There"

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
    inbox = await new web3.eth.Contract(JSON.parse(interface)) // Teaches web3 about what methods our contract Incbox is currently having, the parse will make us get a js interface
        .deploy({data :  bytecode, arguments: [INITIAL_MSG]}) //Tells Web3 that we want to deploy a new copy of our contract, this will create the transaction for the data
        .send({from : accounts[0], gas: '1000000'}) // Instructs web3 to send out a transaction that creates this contract. This triggers the network to create the contract

});

describe('Inbox', () => {
  it('Deployed a Contract',()=>{
    console.log("ADDRESS --- ",inbox._address)
    assert.ok(inbox.options.address); // Show us where this contract was deployed to
  })

  //Deploying our contract always gets a default value
  it('has a default message', async()=>{
    //Reference the contract on the blockchain, then call methods which shows all public functions
    //We must use a parenthesis when calling a method and the 2nd attached to the .call()
    //the 2nd method is used to customize the message, and it will specify who will pay for the contract
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_MSG)

  })

  //MODIFY THE CONTRACT'S DATA, SPECIFY WHO IS ISSUING THE TRANSACTION

  it('Can change the message', async() => {
    //TO change the message in the contract() - IF everything happens ok then no error 
    await inbox.methods.setMessage("Chao").send({  from: accounts[0]})
    const message = await inbox.methods.message().call()
    assert.equal(message, 'Chao')




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


