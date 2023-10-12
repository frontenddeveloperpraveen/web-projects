const import_btn = document.querySelector('#import');
const upload_btn = document.querySelector('#upload');
const preview = document.querySelector('.preview img');
const btns = document.querySelectorAll('.options button'); 
const scroller = document.querySelector('#scroller')
const display = document.querySelector('#display')

let brightness = saturation = 100; // default value
let inversion = grayscale = 0; // default value

btns[0].click()
import_btn.addEventListener('click',()=>{upload_btn.click()});
preview.addEventListener('click',(event)=>{if (event.detail == 2){upload_btn.click()}})

upload_btn.addEventListener('change',()=>{
    let file = upload_btn.files[0];
    if(!file) return;
    preview.src = URL.createObjectURL(file);
    document.querySelector('.container').classList.remove('disable');

})

scroller.addEventListener('input',()=>{
    const active_btn = document.querySelector('.options .active');
    display.value = scroller.value;
    const btnn = active_btn.innerHTML;
    if(btnn === 'Brightness'){
        brightness = scroller.value;
    } else if (btnn==='Saturation'){
        saturation =scroller.value;
    } else if(btnn === 'Inversion'){
        inversion =scroller.value;
    } else{
        grayscale =scroller.value;
    }
    Edit()
})


function Select(num){
    btns.forEach((btn)=>{btn.classList.remove('active')})
    btns[num].classList.add('active');
    if (num == 0){
        //brightness
        display.value = scroller.value = brightness;
        
    }else if(num==1){
        display.value = scroller.value = saturation;

    }else if(num==2){
        display.value = scroller.value = inversion;
    }else{
        display.value = scroller.value = grayscale;

    }
    Edit()
}

// <a href="https://ibb.co/JtkzczS"><img src="https://i.ibb.co/JtkzczS/Untitled-design.png" alt="Untitled-design" border="0"></a>


function Edit(){
    preview.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
}


const reset = () =>{

    brightness = saturation = 100;
    inversion = grayscale = 0; 
    btns[0].click()
    Edit()
}


function save(){
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = preview.naturalWidth;
    canvas.height = preview.naturalHeight;
    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    ctx.drawImage(preview,0,0,canvas.width,canvas.height);
    const link = document.createElement('a');
    link.download = 'Edited image.jpeg'
    link.href = canvas.toDataURL();
    link.click();
}

//project completed
