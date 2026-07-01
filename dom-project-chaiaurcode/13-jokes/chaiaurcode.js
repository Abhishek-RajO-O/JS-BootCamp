const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const output = document.querySelector("#display-joke");
// handle this end point with XMLHttpRequest
// const xhr = new XMLHttpRequest();

// let joke = null;

// btn.addEventListener('click',(e)=>{
//     // console.log('clicked');
//     // console.log(xhr.readyState);
//     xhr.onreadystatechange = function(){
//         // console.log(xhr.readyState);

//         if(xhr.readyState === 4){
//             joke = this.responseText;
//             joke = JSON.parse(joke).value;
//             // console.log(joke);
//             output.textContent = `${joke}`;
//         }
//     }
//     xhr.open('GET',url,true);
//     xhr.send();
// })

// handle this end point with promises
btn.addEventListener("click", (e) => {
  fetch(url)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((joke) => {
      joke = joke.value;
      output.textContent = `${joke}`;
    })
    .catch((error) => {
      console.log(error);
    });
});

// handle the case of race condition
