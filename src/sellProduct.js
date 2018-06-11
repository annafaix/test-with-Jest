// 4 Skriv testfall för funktionen sellProduct(product). Funktionen tar ett objekt som parameter, som ska ha egenskaperna name, price och count. När funktionen anropas ska antalet produkter minskas med ett. Om det inte finns några kvar ska funktionen kasta ett exception med throw. Felhantering på MDN.


function sellProduct(product){
  if((typeof product) !== 'object'){
    return false;
  }else if(typeof Number(product.count)!== 'number'){
    product.count--
    return true;
  }else if(product.count < 1){
    throw new Error ('something went wrong!')
  }else{
    product.count--
    return true;
  }
}

export {sellProduct};
