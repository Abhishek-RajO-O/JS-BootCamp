const output = document.querySelector('#output-field');
const inputBox = document.querySelector('#input-field');
const btns = document.querySelectorAll('.btn');

btns.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        let task =  e.currentTarget.classList[1];
        converter(task);
    });
    
});

function converter(task){
    let input = inputBox.value;

    output.removeAttribute('style');
    
    output.textContent = input;

    switch (task) {
        case 'uppercase':
        case 'lowercase':
        case 'capitalize':
            output.style.textTransform = `${task}`;            
            break;
        case 'bold':
            output.style.fontWeight= 'bold';
            break;
        case 'italic':
            output.style.fontStyle = 'italic';
            break;
        case 'underline':
            output.style.textDecoration = 'underline';
            break;
        default :
            output.textContent = 'Error';
            break;
    }
}   
