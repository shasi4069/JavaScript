const user={
    username:"shasi",
    email:"shasi@google.com",
    price:999,
    welcomeMessage : function(){
        //this - refer current context
        console.log(`${this.username} ,welcome to website`);
       // console.log(this);
        
    }

}
//user.welcomeMessage()
// user.username="som"
// user.welcomeMessage()
//console.log(this);

// function chai(){
//     let username="shasi"
//     console.log(this.username);
    
// }
// chai()


