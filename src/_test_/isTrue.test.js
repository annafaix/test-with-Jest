import React from 'react';
import {isTrue} from '../isTrue.js';

test('is salted caramel the best ice cream', () => {
  expect(isTrue('salted caramel')).toBe(true);
});

// test('is vanilla the best ice cream flavor', () => {
//   expect(isTrue('vanilla')).toBe(true);
// });
