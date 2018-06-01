// 3 Skriv tre testfall för funktionen isFingerNumber(n). Funktionen ska returnera true om n är ett tal mellan 1 och 10. Skriv själva funktionen när du är klar med testfallen.

import React from 'react';

function isFingerNumber(n){
  if(n <=10){
    return true
  }else {
    return false
  }
}

export {isFingerNumber};
