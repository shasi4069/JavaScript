//singleton

//object literals
const mysym=Symbol("key")
const JsUser={
    name:"shasi",
    age:20,
    [mysym]:"key",
    location:"noida",
    email:"shasi@microsoft.com",
    lastLoginDays:["monday","sunday"]
}
// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser[mysym]);
// console.log(typeof(JsUser[mysym]));

// JsUser.name="preeti"
// console.log(JsUser.name);

// Object.freeze(JsUser)
// JsUser.name="shasi"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log(`Hello JS user,${this.name}`);  
}
console.log(JsUser.greeting());
