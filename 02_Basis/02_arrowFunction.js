// implecit retrun 

// const call = () =>  ("Calling..");

// or

const call = () =>  "Calling..";

console.log(call());

// for returning objects 

const objectProvider = () => ({name : "Abhishek"});
// const objectProvider = () => {name : "Abhishek"};    undefined

console.log(objectProvider());




//explicite return

const call2 = () => {
    return "Calling.."
}
console.log(call2());