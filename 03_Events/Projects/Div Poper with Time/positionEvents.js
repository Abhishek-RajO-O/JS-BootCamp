 const body = document.body;

    const createDiv = function(x,y,text){
        const div = document.createElement('div');
        div.innerText = text;
        div.style.backgroundColor  = "#ccc";
        div.style.position = "fixed";
        div.style.top = y+'px';
        div.style.left = x+'px';
        
        
        return div;
    }

    body.addEventListener('click', (e)=>{      
        let time = new Date(performance.timeOrigin+ e.timeStamp);
        let text = time.toLocaleString();
        // console.log(e.timeStamp.toLocaleString());
        body.appendChild(createDiv(e.clientX,e.clientY,text));
    })