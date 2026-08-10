const accountId = 12345
let accountEmail="shasi123@google.com"
var accountPassword="shasi123"
 accountCity="Bangalore"
 let accountstate;
 
//  accountId=2 not allowed

// {} scope
/*
prefer not to use var 
because of issue in block scope and functional scope 
*/
accountEmail="abc@tech.com"
accountPassword="32647"
accountCity="america"
 console.log(accountId)
 console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])