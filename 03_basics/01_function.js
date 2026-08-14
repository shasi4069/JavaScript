function sayMyName(){
    console.log("shasi");
    console.log("btech");
    
    
}
//saymyName- is a reference 
//()- use for execution
// sayMyName()
// function addTwoNumber(num1,num2){
// //     console.log(num1+num2);
// }
//num1,num2-are parameters
//3,4 - are arguments

function addTwoNumber(num1,num2){
return num1+num2
// let result=num1+num2
// return result
}
const result=addTwoNumber(3,4)
//console.log("Result :",result);

function LoginUserMessage(username="som "){
    // if(username===undefined){
    if(!username){
        console.log("enter a username");
        return
    }
    return`${username}just logged in`
}
//console.log(LoginUserMessage());
//...-rest operator
function calculateCartPrice(...num1){
  return num1
}
console.log(calculateCartPrice(50,90,86))

const user={
    username:"shasi",
    price:122
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username:"som",
    price:332
})

const myNewArray=[12,33,33,22]

function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(myNewArray));
