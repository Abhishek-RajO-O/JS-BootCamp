let lastScrollPosition = 0;
let ticking = false;
const progress = document.querySelector('.progress');
function progressUpdater(lastScrollPosition){
    const totalScrolabale = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (lastScrollPosition/totalScrolabale)*100;
    progress.style.width = `${scrollPercentage}%`;    
}

document.addEventListener('scroll', (event)=>{
    lastScrollPosition = window.scrollY;
    
    if(!ticking){
        setTimeout(()=>{
            progressUpdater(lastScrollPosition);
            ticking = false;
            console.log("Fired")
        },20)
    }
    ticking = true;
    
})