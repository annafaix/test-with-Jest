// 4 Skriv testfall för funktionen sellProduct(product). Funktionen tar ett objekt som parameter, som ska ha egenskaperna name, price och count. När funktionen anropas ska antalet produkter minskas med ett. Om det inte finns några kvar ska funktionen kasta ett exception med throw. Felhantering på MDN.

import React from 'react';

let product ={
  name: 'Black hole',
  price: '99.95',
  count: 5,
}

function sellProduct(product){
  // if(product.count >= 0){
  //   product.count--;
    return true;
  // }else{
  //   throw new Error ('something went wrong!')
  // }
}

export {sellProduct};
