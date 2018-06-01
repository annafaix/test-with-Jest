import {add} from '../add.js';
import React from 'react';

test('add 3 + 5', ()=>{
  expect(add(3,5)).toBe(8);
})

test('add "4" + 3', ()=>{
  expect(add("4",3)).toBe(7);
})

test('add returns NaN',() =>{
  let isNotNum = (add(null, 3) !==  add(null, 3));
  expect(isNotNum).toBe(true);
} )
