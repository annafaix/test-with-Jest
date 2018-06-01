import React from 'react';
import {numberOfDays} from '../numberOfDays.js';

test('how many days has January 2020', ()=>{
  expect(numberOfDays('January',2020)).toBe(31);
})

test('has February 28 days', ()=>{
  expect(numberOfDays(2, 2019)).toBe(28);
})

test('has 12:th month 31 days', ()=>{
  expect(numberOfDays(12, 2018)).toBe(31);
})

test('has april 30 days', ()=>{
  expect(numberOfDays('April',2019)).toBe(30);
})
