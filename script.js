const newYear="1 jan 2025";
function countdown(){
    const newYearDate=new Date(newYear);
    const currentDate=new Date();

    const totalSeconds = (newYearDate-currentDate)/1000;
    const days= Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=timeFormat(hours);
    document.getElementById("minutes").innerHTML=timeFormat(minutes);
    document.getElementById("seconds").innerHTML=timeFormat(seconds);

}

function timeFormat(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown,1000);
