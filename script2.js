let sessionTimeP =  document.getElementById('session-time-val');
let breakTimeP =  document.getElementById('break-time-val');

let sessionTimeMinusBtn = document.getElementById('session-time-Mbtn');
let sessionTimePlusBtn = document.getElementById('session-time-Pbtn');

let breakTimeMinusBtn = document.getElementById('break-time-Mbtn');
let breakTimePlusBtn = document.getElementById('break-time-Pbtn');

let startStopBtn = document.getElementById('start-pause-btn');
let resetBtn = document.getElementById('reset-btn');

let showHerePtag = document.getElementById('show-here');
let h1Tag = document.getElementById('session-cnt');

let isRunning = false;
let sMin = 2;
let sSec = 0;

let bMin = 2;
let bSec = 0;

let minutes = 2;
let seconds = 60;
let milSec = 0;
let sessionCnt = 1;

let mStr="";
let sStr="";
let milSecStr="";
let id;

sessionTimeMinusBtn.addEventListener('click',function(){
    console.log("sessionTimeMinusBtn clicked");

    if(x> 0 && x <=60){
        x--;
        minutes = x;
    }
    let str;
    if(x<10){
        str = `0${x} min`;
    }
    else{
        str = `${x} min`;
    }
    sessionTimeP.innerText=str;

    str = x<10 ? `0${x} : 00`: `${x} : 00`;
    showHerePtag.innerText = str;
});

sessionTimePlusBtn.addEventListener('click',function(){
    console.log("sessionTimePlusBtn clicked");

    if(x>=0 && x<60){
        x++;
        minutes = x;
    }
    let str;
    if(x<10){
        str = `0${x} min`;
    }
    else{
        str = `${x} min`;
    }
    sessionTimeP.innerText = str;

    str = x<10 ? `0${x} : 00`: `${x} : 00`;
    showHerePtag.innerText = str;
});

breakTimeMinusBtn.addEventListener('click',function(){
    console.log("breakTimeMinusBtn clicked");

    if(y> 0 && y <= 60){
        y--;
    }
    let str;
    if(y<10){
        str = `0${y} min`;
    }
    else{
        str = `${y} min`;
    }
    breakTimeP.innerText=str;
});

breakTimePlusBtn.addEventListener('click',function(){
    console.log("breakTimePlusBtn clicked");

    if(y >= 0 && y < 60){
        y++;
    }
    let str;
    if(y<10){
        str = `0${y} min`;
    }
    else{
        str = `${y} min`;
    }
    breakTimeP.innerText=str;
});

startStopBtn.addEventListener('click',function(){
    console.log("startPauseBtn clicked");

    if(!isRunning){

        console.log(minutes);
        console.log(seconds);

        id = setInterval(timer,10,minutes);
        isRunning = true;
        sessionTimeMinusBtn.disabled = true;
        sessionTimePlusBtn.disabled = true;
    
        breakTimeMinusBtn.disabled = true;
        breakTimePlusBtn.disabled = true;
        startStopBtn.innerText = "Pause";
    }
    else{
        clearInterval(id);
        isRunning = false;
        startStopBtn.innerText = "Start";
    }
});

resetBtn.addEventListener('click',function(){
    console.log("resetBtn clicked");

    isRunning = false;
    h1Tag.innerText = `Session 1`;
    clearInterval(id);
    startStopBtn.innerText = "Start";
    sessionTimeMinusBtn.disabled = false;
    sessionTimePlusBtn.disabled = false;

    breakTimeMinusBtn.disabled = false;
    breakTimePlusBtn.disabled = false;

    x = 2;
    y = 5;
    seconds = 59;
    minutes= 2;
        
    let str = `${x} min`;
    sessionTimeP.innerText = str;
    str = x<10 ? `0${x} : 00`: `${x} : 00`;
    showHerePtag.innerText = str;

    str = `0${y} min`;
    breakTimeP.innerText=str;
});
let once = false;

// function timer2(tPeriod){
//     // console.log("being called");
//     // if(minutes == x && x!=0){
//     //     minutes--;
//     // }
//     // if(!once){
//     //     minutes = tPeriod;
//     //     once = true;
//     // }
//     // console.log("here",minutes,seconds);

//     // hours = parseInt(hours);
//     minutes = parseInt(minutes);
//     // minutes = x
//     seconds = parseInt(seconds);
//     milSec = parseInt(milSec);



//     if(milSec == 0){
//         milSec = 99;
//         seconds = seconds - 1;
//         console.log("milSec == 0");
//     }
//     if(seconds==0){
//         seconds = 59;
//         minutes = minutes - 1;
//         console.log("seconds == 0");
//     }
//     if(minutes == 0 && seconds ==0){
//         // minutes = x;
//         once = false;
//         sessionCnt++;
//         seconds = 59;
//         clearInterval(id);
//         id = setInterval(timer,1,y);
//         // console.log(sessionCnt,"if m==0");

//         h1Tag.innerText = `Session ${sessionCnt}`;
//     }
    
//     // console.log(sessionCnt);
//     milSec = milSec -1;

//     if(minutes<10) mStr = "0"+minutes;
//     else mStr = "" + minutes;

//     if(seconds<10) sStr = "0"+seconds;
//     else sStr = "" + seconds;

//     if(milSec<10) milSecStr = "0"+milSec;
//     else milSecStr = "" + milSec;

//     let str = mStr + " : " + sStr;
//     showHerePtag.innerText = str;
//     // id = setInterval(timer,10);
// }

function timer(){

    if(milSec == 0){
        milSec = 99;
        sSec = sSec - 1;
        console.log("milSec == 0");
    }

    if(sMin != 0){
        sSec--;
    } else if(sMin != 0 && sSec == 0){
        sSec = 59;
        sMin--;
    }

    if(sMin == 0 && sSec == 0){
        if(bSec != 0){
            bSec--;
        } else if(bMin != 0 && bSec == 0){
            bSec = 59;
            bMin--;
        }
    }

    if(sMin == 0 && sSec == 0 && bMin == 0 && bSec== 0){
        sMin = 20;
        sSec = 0;

        bMin = 5;
        bSec = 0;

        sessionCnt++;
        h1Tag.innerText = `Session ${sessionCnt}`;

        // document.getElementById('counter').innerText++;
    }
    milSec--;

    if(sMin == 0 && sSec == 0){
        if(bMin<10) mStr = "0"+bMin;
        else mStr = "" + bMin;

        if(bSec<10) sStr = "0"+ bSec;
        else sStr = "" + bSec;

        // let str = mStr + " : " + sStr;
        // showHerePtag.innerText = str;
    }else{
        if(sMin<10) mStr = "0"+sMin;
        else mStr = "" + sMin;

        if(sSec<10) sStr = "0"+ sSec;
        else sStr = "" + sSec;

        // let str = mStr + " : " + sStr;
        // showHerePtag.innerText = str;
    }
    let str = mStr + " : " + sStr;
    showHerePtag.innerText = str;
}

