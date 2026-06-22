const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const height = Number(document.querySelector("#height").value);
    const weight = Number(document.querySelector("#weight").value); 
    const result = document.querySelector("#results");
    let bmi ;
    if(isNaN(height) || height < 0 || height == ''){
        result.innerHTML = `Invalid Height ${height}`;
    }else if(isNaN(weight) || weight < 0 || height ==''){
        result.innerHTML = `Invalid weight ${weigth}`;
    }else {
        bmi = weight /((height*height)/10000).toFixed(2);
        result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
    }
    let message = "";
    if(bmi > 24.9){
        message = "You are Over weight!";
    }else if (bmi >= 18.6){
        message = "You are in Normal Range";
    }else{
        message = "You are Under Weight";
    }
    const messageBox = document.querySelector("#messageBox");
    messageBox.innerHTML = `<span>${message}</span>`;
})