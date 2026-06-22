const buttons = document.querySelectorAll(".button");
const body = document.body;
buttons.forEach( (button) =>{
    button.addEventListener("click",(e)=>{
        const color = e.target.id;
        body.style.backgroundColor = color;
    })
})