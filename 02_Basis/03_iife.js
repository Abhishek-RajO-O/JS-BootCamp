// () defination  then () execution
(function chai(){
    //named IIFE
    console.log("Calling...");
})(); // here ; is important 

( (name)=> {
    // IIFE
    console.log(`Calling ${name}`);
    
})("Abhishek")

// we use IIFEs to avoid the polution of global scope variables 