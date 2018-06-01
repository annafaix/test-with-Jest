import {isFingerNumber} from '../isFingerNumber';
import React from 'react';

test('is 9 a finger umber', ()=>{
  expect(isFingerNumber(9)).toBe(true);
})
test('is 11 a finger number',()=>{
  expect(isFingerNumber(11)).toBe(false);
})

test('is 0 a finger number', () => {
  expect(isFingerNumber(0)).toBe(true);
})
