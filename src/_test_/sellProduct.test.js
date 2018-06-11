import {sellProduct} from '../sellProduct.js';

test('product is valid object', ()=>{
  let product ={
    name: 'Black hole', price: '99.95', count: 5,
  }
  expect(sellProduct(product)).toEqual(true);
})

test('product is not valid object', ()=>{
  expect(sellProduct("hello")).toEqual(false);
})

test('throw error if no products', () =>{
  let product ={
    name: 'Black hole', price: '99.95', count: 0,
  }
  expect( () => sellProduct(product)).toThrow()
})

test('product count works fine', ()=>{
  let product ={
    name: 'Black hole', price: '99.95', count: 5,
  }
  sellProduct(product);
  expect(product.count).toBe(4)
})

test('product count "10" works', ()=>{
  let product ={
    name: 'Black hole', price: '99.95', count: "10",
  }
  sellProduct(product);
  expect(product.count).toBe(9);
})
