// 1 Skriv tre testfall för funktionen renderParagraph(x). Funktionen ska ta en sträng som parameter och returnera en sträng som motsvarar en HTML-paragraf. Exempel: "hej" → "<p>hej</p>".
import React from 'react';

function renderParagraph(x) {
  return ('<p>'+x+'</p>');
};

export {renderParagraph};
