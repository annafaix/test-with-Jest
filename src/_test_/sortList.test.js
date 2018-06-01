import React from 'react';
import {sortList} from '../sortList.js';

test('sort array in alphabetical order', ()=>{
  let list = ["apple", "water", "bubble", "tea"];

  expect(sortList(list)).toEqual(["apple", "bubble", "tea" ,"water"])
})
