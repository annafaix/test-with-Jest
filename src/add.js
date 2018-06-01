import React from 'react';
// 5 Skriv testfall för funktionen add(x, y) som ska lägga ihop två tal och returnera resultatet. Om någon av parametrarna inte är av datatypen Number så ska funktionen returnera NaN. Men om en parameter är en sträng som går att omvandla till ett nummer så ska den omvandla strängen till ett tal och returnera resultatet.

function add(x, y){
  if((typeof x) === 'string' || (typeof y) === 'string'){
    return (Number(x)+Number(y));
  }else if((typeof x) !== 'number' || (typeof y) !== 'number'){
    return (NaN);
  }else{
    return x+y;
  }
}

export {add};
