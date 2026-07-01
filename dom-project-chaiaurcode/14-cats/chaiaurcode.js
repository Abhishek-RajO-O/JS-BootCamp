const url = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector('.btn');
const container = document.querySelector('.container')
let data = null;
let imgUrl = null;
btn.addEventListener('click',()=>{

    fetch(url)
    .then((response)=>{
        data = response.json()
        return data;
    })
    .then((data)=>{
        console.log(data);
        
        imgUrl = data[0]['url'];
        console.log(imgUrl);
        let height = data[0]['height'];
        let width = data[0]['width'];
        
        return [imgUrl,height,width];
    }).then((arr)=>{
        console.log();
        
        if(container.hasChildNodes('img')){
            // let img = document.querySelector('img');
            container.removeChild(container.firstChild);
        }
        let img = document.createElement('img');
        img.setAttribute('src',`${arr[0]}`);
        img.setAttribute('height' , `${arr[1]} px`);
        img.setAttribute('width' , `${arr[2]} px`);

        container.appendChild(img);
    })



})