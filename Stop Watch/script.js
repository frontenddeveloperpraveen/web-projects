const startbtn = document.querySelector('.start');
const stopbtn = document.querySelector('.stop');
const resetbtn = document.querySelector('.reset');
// Button functions on click


let hr = min = sec = ms = 0;
let Timer;

Display()

startbtn.addEventListener('click',()=>{
    Timer = setInterval(() => {
        
        ms++;
        if (ms === 100) {
            sec ++;
            ms = 0;
        }
        if (sec === 60) {
            min ++;
            sec = 0;
        }
        if (min===60) {
            hr++;
            min = 0;
        }
        Display()
        
        startbtn.classList.add('btn-disable');

        stopbtn.classList.remove('btn-disable');

    }, 10); // 10 milli sec
})



stopbtn.addEventListener('click',()=>{
    clearInterval(Timer);
    Display()
    
    startbtn.classList.remove('btn-disable');
    stopbtn.classList.add('btn-disable')
})



resetbtn.addEventListener('click',()=>{
    clearInterval(Timer);
    hr = min = sec = ms = 0;
    Display()
    startbtn.classList.remove('btn-disable');
    stopbtn.classList.remove('btn-disable');
})


function Display(){

    hrs = hr<10?'0'+hr:hr;
    mins = min<10?'0'+min:min;
    secs = sec<10?'0'+sec:sec;
    mss = ms<10?'0'+ms:ms;

    document.querySelector('.h').innerHTML = hrs;
    document.querySelector('.m').innerHTML = mins;
    document.querySelector('.s').innerHTML = secs;
    document.querySelector('.ms').innerHTML = mss;

}

window.requestAnimationFrame(Timer);

