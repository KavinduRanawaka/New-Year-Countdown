let cDay;
let cHour;
let cMin;
let cSec;
let cMonth;
let cdaysLeft;
let cYear;
let daysPerYear;
let daysInFeb;

let interval = window.setInterval(function(){
   let cDate= new Date();

   cHour=cDate.getHours();
   cMin=cDate.getMinutes();
   cSec=cDate.getSeconds();
   cDay=cDate.getDate();
   cMonth=cDate.getMonth();
   cYear=cDate.getFullYear();
   

   if(cYear%4==0){
      daysPerYear=366;
      daysInFeb=29;
   }
   else{
      daysPerYear=365;
      daysInFeb=28;
   }

   switch(cMonth){
        case 0:
           cdaysLeft=daysPerYear;
           break;
        
        case 1:
           cdaysLeft=daysPerYear-31;
           break;
        
        case 2:
            cdaysLeft=daysPerYear-(31+daysInFeb);
            break;
        case 3:
            cdaysLeft=daysPerYear-(62+daysInFeb);
            break;
        case 4:
            cdaysLeft=daysPerYear-(92+daysInFeb);
            break;
        case 5:
            cdaysLeft=daysPerYear-(123+daysInFeb);
            break;
        case 6:
            cdaysLeft=daysPerYear-(153+daysInFeb);
            break;
        case 7:
            cdaysLeft=daysPerYear-(164+daysInFeb);
            break;
        case 8:
            cdaysLeft=daysPerYear-(215+daysInFeb);
            break;
        case 9:
            cdaysLeft=daysPerYear-(245+daysInFeb);
            break;
        case 10:
            cdaysLeft=daysPerYear-(276+daysInFeb);
            break;
        case 11:
            cdaysLeft=daysPerYear-(306+daysInFeb);
            break;
        
   }


   document.getElementById('seconds').innerHTML=60-cSec;
   document.getElementById('minutes').innerHTML=60-cMin;
   document.getElementById('hours').innerHTML=24-cHour;
   document.getElementById('days').innerHTML=cdaysLeft-cDay;
},1000);