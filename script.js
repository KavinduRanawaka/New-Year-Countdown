let cDay;
let cHour;
let cMin;
let cSec;
let cMonth;
let cdaysLeft;

let interval = window.setInterval(function(){
   let cDate= new Date();

   cHour=cDate.getHours();
   cMin=cDate.getMinutes();
   cSec=cDate.getSeconds();
   cDay=cDate.getDate();
   cMonth=cDate.getMonth();

   switch(cMonth){
        case 1:
           cdaysLeft=365;
           break;
        
        case 2:
           cdaysLeft=365-31;
           break;
   }


   document.getElementById('seconds').innerHTML=60-cSec;
   document.getElementById('minutes').innerHTML=60-cMin;
   document.getElementById('hours').innerHTML=24-cHour;
   document.getElementById('days').innerHTML=cdaysLeft-cDay;
},1000);