import {isSummer} from '../isSummer.js';
import React from 'react';

test('is juni summer month', ()=>{
  expect(isSummer('juni')).toBe(true);
})

test('is month 8 summer', ()=>{
  expect(isSummer(8)).toBe(true);
})

test('is Juli a summer month', ()=>{
  expect(isSummer('Juli')).toBe(true);
})

// test('is 12.month a summer month', ()=>{
//   expect(isSummer(12)).toBe(true);
// })
