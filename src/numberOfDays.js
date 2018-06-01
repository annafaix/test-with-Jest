import React from 'react';

// Skriv testfall för funktionen numberOfDays(month, year). Funktionen ska ta två tal som parametrar, som motsvarar månad (börjar på 1) och år. Funktionen ska returnera hur många dagar det är i den aktuella månaden

function numberOfDays(month, year){

  let longMonths = ['January', 'March', 'May', 'July', 'August', 'Octorber', 'December', 1,3,5,7,8,10,12];

  if(longMonths.includes(month)){
    return 31;
  }else if(month == "February" || month == 2){
    return 28;
  }
  else{
    return 30;
  }

}

export {numberOfDays};
