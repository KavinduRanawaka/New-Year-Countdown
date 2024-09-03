const newYear="1 jan 2025";
function countdown(){
    const newYearDate=new Date(newYear);
    const currentDate=new Date();

    const totalSeconds = (newYearDate-currentDate)/1000;
    const days= Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;

    document.getElementById

}
countdown();
