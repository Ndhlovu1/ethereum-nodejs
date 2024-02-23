//Deploy the contract

const HDWalletProvider = require('truffle-hdwallet-provider');

const Web3 = require('web3');

const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(

    //Test Account
    accountMneumonic = 
    "shiver cancel mechanic divorce crowd foam guess shrug give video clip still",
    //Infura API
    'https://goerli.infura.io/v3/0eadc5b550dd46ceb632e6dfdc913c85'
);

const web3 = new Web3(provider);
