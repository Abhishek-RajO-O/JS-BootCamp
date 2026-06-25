// comonents 
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const body = document.body;
// functions
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0 ; i < 6 ;i++){
        color += (hex[Math.floor(Math.random()*16)]);
    }
    return color;    
}
const chnageColor = function(){
    let color = randomColor();
    body.style.backgroundColor = color;
}

// logic 

let intervalId = null;

startBtn.addEventListener('click', (e)=>{
    if(! intervalId){
        intervalId = setInterval(chnageColor , 2000);
    }
},false);

stopBtn.addEventListener('click', (e)=>{
    console.log("Stop");
    
    if(intervalId){
        clearInterval(intervalId);
        intervalId = null;
    }
},false);
