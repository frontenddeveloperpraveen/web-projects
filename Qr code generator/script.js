


const text = document.querySelector('#text');
const box = document.querySelector('#qrcode');
const image = document.querySelector('#img');

function generate(){

    var link = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + text.value;
    image.src = link;
    box.classList.add('show-img');
}
