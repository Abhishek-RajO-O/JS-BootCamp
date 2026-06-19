// "use strict";
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

function chai(){
    let username = "hitesh"
    console.log(this);
}

chai()

const chai2 = function () {
    let username = "hitesh"
    console.log(this);
}

// chai2();

const chai3 = () => {
    console.log(this); // this does't working in arrow function.
}
// chai3();