

var date = document.querySelectorAll('.date p');
var month = document.querySelectorAll('.months span');
var day = document.querySelectorAll('.days span');
var hour = document.querySelectorAll('.h');
var min = document.querySelectorAll('.m');
var sec = document.querySelectorAll('.s');
var meridian = document.querySelectorAll(".meridian span")

function clock(){

        var time = new Date();

        var d = time.getDate();

        var m = time.getMonth()+1;

        var y = time.getFullYear();

        d = d<10?'0'+d:d;
        m = m<10?'0'+m:m;
        date[0].innerHTML = `${d}-${m}-${y}`;

        var ddd = time.getDay();

        day[ddd].classList.add('active')

        month[time.getMonth()].classList.add('active')


        //time

        var h = time.getHours();
        var mm = time.getMinutes();
        var secs = time.getSeconds();



        if (h > 12) {
            h = h>12?h-12:h;
            meridian[1].classList.add('show');
        } else {
            if (h == 0) {
                h = 12;
            }
            meridian[0].classList.add('show');
        }

        h = h.toString();
        mm = mm.toString();
        secs = secs.toString();

        h = h<10?'0'+h:h;
        mm = mm<10?'0'+mm:mm;
        secs = secs<10?'0'+secs:secs;

        console.log(h)

        hour[0].innerHTML = h[0];
        hour[1].innerHTML = h[1];

        min[0].innerHTML = mm[0];
        min[1].innerHTML = mm[1];
        sec[0].innerHTML = secs[0];
        sec[1].innerHTML = secs[1];




};

setInterval(clock,1000)