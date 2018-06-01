import React from 'react';
// 6 Skriv testfall för funktionen backwards(x), som ska ta en sträng som parameter och returnera en sträng som är den ursprungliga strängen fast baklänges
function backwards(x){
  return x
  .split('')
  .reverse()
  .join('')
}

export {backwards};
