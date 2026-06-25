 const body = document.body;

    const createDiv = function(x,y){
        const div = document.createElement('div');
        div.innerText = "Clicked Here";
        div.style.backgroundColor  = "#ccc";
        div.style.position = "fixed";
        div.style.top = y+'px';
        div.style.left = x+'px';
        
        
        return div;
    }

    body.addEventListener('click', (e)=>{        
        body.appendChild(createDiv(e.clientX,e.clientY));
    })