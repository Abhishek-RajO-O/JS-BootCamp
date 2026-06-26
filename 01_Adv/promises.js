const promisOne = new Promise(function (resolve,reject){
    setTimeout(() => {
        console.log("PromiseOne TimeOut");
        resolve();
    }, 1000);
    
})

// promisOne.then(function () {
//     console.log("Promis resolved");
    
// })

// // promise 2
// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("PromiseTwo TimeOut");
//         resolve();
//     }, 2000);
// }).then(function(){
//     console.log("PromisTwo  Resolved");
    
// })

// // Promise 3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            "username": "Abhishek",
            "email" : "abhi@examle.com"
        })
    },0)
})

// promiseThree.then(function(user){
//     console.log(user);
    
// })

// promise 4

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(! error){
//             resolve({
//                 "username": "Abhishek",
//                 "email" : "abhi@examle.com"
//             })
//         }else{
//             reject("Error");
//         }
//     },1000);
// });

// // // Chaning then

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
    
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Promise 4 Executed");
// })

// Promise 5

// const promiseFive= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(! error){
//             resolve({
//                 "username": "Abhishek",
//                 "email" : "abhi@examle.com"
//             })
//         }else{
//             reject("Error from promiese 5");
//         }
//     },1000);
// });

// async function consumePromiseFive() {
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))


const p = await Promise.all([promisOne,promiseThree]);
setTimeout(()=>{
    console.log(p);
    
},1000)