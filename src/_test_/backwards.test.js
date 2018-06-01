import React from 'react';
import {backwards} from '../backwards.js';

test('hej to jeh', ()=>{
  expect(backwards('hej')).toBe('jeh');
})
