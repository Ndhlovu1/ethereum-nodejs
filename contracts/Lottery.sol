pragma solidity ^0.4.17;

contract Lottery{

    //data_type data_visibility variable_name;
    address public manager;
    address[] public players; //Hold unlimited array names for the lottery

    function Lottery() public {

        // Automatically discover the address of the person tryna create the contract
        // Set the manager address to the creater
        // 'msg - message' object describes who just sent a transaction to the network and explains the transactions themselves

        /*      Message(msg) Global Variable - Comes by default

        Property                            Property Name
        
        1. msg.data                         'Data' field  from the call or transaction that invoked the current function

        2. msg.gas                          Amount of gas the current function invocation has available

        3. msg.sender                       Address of the account that started the current function invocation

        4. msg.value                        Amount of ether (in wei) that was sent sent along with the function invocation
        0xEeC94B3576184C20023644D89ba6901F8A0B88E5
        */

        //Assign the name of the person who declares the article
        manager = msg.sender;

        //Solidity REFERENCE TYPES 

        /*              REFERENCE TYPES

            1. Fixed Array : Single Type of Elements and Has Unchanging Length and the defaultly produced method will not return an array, it will require you to state the index, therefore create a method to specifically returning own functions e.g. int[3] --> [1,2,3] , bol[2] -->[true, false]

            2. Dynamic Array : Array that contains a single type of element. Can change in size over time e.g. int[] --> [1,2,3] , bool[] -->[true, false, maybe]

            3. Mapping : Collection of key-Pair Valuues i.e. dictionaries and all keys must be of the same types & the same applies for the values e.g. mapping(string => string) , mapping(int => bool) 

            4. Struct : Collection of key value pairs that can have different types. Usually used to represent a singular item e..g struct Car { sting make; string model; uint value; }

            Main Difference between a mapping and a struct is that it can have different values.

            Big Solidity Gotcha to remember : Fixed and Dynamic Array -> 
                PART 1 - NO NESTED ARRAYS IN THE WEB3 DUE TO THE COMMUNICATION LAYER
                PART 2 - STRINGS ARE REPRESENTED AS A DYNAMIC ARRAY HENCE THEY CANT BE MOVED INTO THE JAVASCRIPT WORLD

            USE payable for people who want to enter the lottery to send some money
        */



    }

    //Enter Players if they call this method
    function enters() public payable {
        

        //Ensure that the player sends some money, and adding the ether value tells people how much they wanna send
        require(msg.value > .01 ether);

        players.push(msg.sender);        
    }

    function random() private view returns (uint){
        //Generate a random function 
        //Global Variable, same with keccak256() these are 1 and the same
        //sha3(block.difficulty, now, players); 
        //Convert the above hash to an uint
        return uint(keccak256(block.difficulty, now, players));
    }


    function pickWinner() public restricted {

        //Use the require statement to control people accessing your account
        //require(msg.sender == manager);//Set the Manager to the default and only run if that is the case

        uint index = random() % players.length;
        players[index].transfer(this.balance); //Transfer some money to a specific account
        //Pick a Winner by emptying out the contract array
        players = new address[](0);
        //Creates a new of type array with an initial size of 0

    }

    //Return all players who have entered the 
    function getPlayers() public view returns (address[]) {
        return players;

    }

    //Defining a new modifier to reduce the amount of code we have to write, and the name is optional, perfect for any repetitive code
    modifier restricted(){
        require(msg.sender == manager);
        _; //Works as a target placeholder for our final code 
    }

}