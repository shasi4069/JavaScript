//Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()
//when problems occure due to global scope use IIFE 

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();

(  (name) =>  {
    //simple IIFE
    console.log(`DB connected two ${name}`);
    
} )('shasi')