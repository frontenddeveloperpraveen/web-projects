
const body = document.getElementsByTagName('body')
const btn = document.getElementById('btn');

var value = 'Light';

btn.addEventListener('click',()=>{

    if (value === 'Light') {
        value = 'Dark';
        btn.innerHTML = value;
        body[0].style.background = 'black';
        body[0].style.color = 'white';
        
    } else {
        value = 'Light';
        btn.innerHTML = value;
        body[0].style.background = 'white';
        body[0].style.color = 'black';
    }

})