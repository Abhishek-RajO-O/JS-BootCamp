const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

let wordIndex = 0;
let letterIndex = 0 ;

const typeDelay  = 200;
const eraseDelay = 100;
const newWordDelay = 1500;


function type() {
    setTimeout(()=>{
        if(letterIndex < words[wordIndex].length){
            typedTextSpan.textContent += words[wordIndex].charAt(letterIndex);
            letterIndex++;
            type();
        }else{
            setTimeout(erase,newWordDelay);
        }

    },typeDelay);
}

function erase() {
    setTimeout(()=>{
        if(letterIndex > 0){
                typedTextSpan.textContent = words[wordIndex].substring(0,letterIndex-1);
                letterIndex--;
                erase();
        }else{
            wordIndex = (wordIndex +1)% words.length;
            letterIndex = 0 ;
            type();
        }
    },eraseDelay);
}


document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        type();
    },1000)
})