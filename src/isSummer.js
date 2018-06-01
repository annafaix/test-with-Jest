import React from 'react';
// Skriv testfall för funktionen isSummer(month), som ska returnera true om parametern motsvarar en månad som räknas som sommarmånad. (dvs juni, juli och augusti) Parametern ska hantera både månader som strängar (små eller stora bokstäver) och månader som tal, där januari motsvarar 1, februari 2 osv..

function isSummer(month){
 let summerMonths = ['juni', 'juli', 'augusti', 'Juni', 'Juli', 'Augusti', 6, 7, 8];

 if(summerMonths.includes(month)){
   return true;
 }
}

export {isSummer};
