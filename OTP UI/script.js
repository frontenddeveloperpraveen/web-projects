
const codes = document.querySelectorAll('.code');
const btn = document.getElementById('btn');

codes[0].focus();

btn.classList.add('disable');


codes.forEach((code,idx) =>{

    code.addEventListener('keydown',(e)=>{

        if (e.key >= 0 && e.key <=9) {
            
            codes[idx].value = '';

            setTimeout(()=>{

                if (idx < (codes.length - 1)) {
                    
                    codes[idx+1].focus();

                } 

                BoxFilled()

            },20) //20 milli second

        } else if(e.key === 'Backspace'){
            setTimeout(()=>{

                if(idx>0){
                    codes[idx-1].focus();
                }
                BoxFilled()
                btn.classList.add('disable');
            },20)  // 20 milli sec
        }
    })
})



const BoxFilled = () => {

    const Filled = [...codes].every((code) => code.value !== '');

    if (Filled) {
        // if all the box is filled we have to enable the verify button
        btn.classList.remove('disable');
    } else {
        // if not all box is filled we have to keep the button in disabled state..
        btn.classList.add('disable');
    }

}


const OTPVerify = () =>{

    const original_otp = 5452;

    var OTP = `${codes[0].value}${codes[1].value}${codes[2].value}${codes[3].value}`
    
    if (Number(OTP) === original_otp) {
        
        alert('Code Verified')

    } else {
        
        alert('Wrong Code')

    }
    
}


function resend(){

    alert('Code resent')

    // resend script here 
}



//Thank you