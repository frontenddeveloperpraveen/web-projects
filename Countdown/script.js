// DOM Seletor

function Launch(){

    const D = document.querySelector("#Days");

    const H = document.querySelector('#Hours');

    const  M = document.querySelector('#Minutes');

    const S = document.querySelector("#Seconds");

    const launch = new Date('July 15 2023');

    const today = new Date();

    const remaining_days = launch - today;

    const Days = Math.floor(remaining_days / 1000/60/60/24);

    const Hours = Math.floor((remaining_days/1000/60/60)%24);

    const Minutes = Math.floor((remaining_days/1000/60)%60);

    const Seconds = Math.floor((remaining_days/1000)%60);

    D.innerHTML = Days;

    H.innerHTML = Hours;

    M.innerHTML = Minutes;

    S.innerHTML = Seconds;

    };

setInterval(Launch,1000);



