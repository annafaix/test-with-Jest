import React from 'react';
import {renderParagraph} from '../renderParagraph.js';

test('is rendering paragraph', () => {
  expect(renderParagraph('hej')).toBe('<p>hej</p>');
})
