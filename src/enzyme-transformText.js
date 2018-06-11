import React, {Component} from 'react';

// Komponenten ska innehålla ett input-element som användaren kan skriva in text i. När användaren skriver i fältet ska komponenten skriva ut följande. Tänk på att skriva ut respektive sträng i ett HTML-element som du kan plocka ut med en selektor. Använd hellre CSS-klass än id.
// texten baklänges, "10" → "01"
// texten konverterad till bara stora bokstäver, "TeDeDe" → "TEDEDE"
// texten som ett tal upphöjt till två, "5" → "25"

class TransformText extends Component{
  render(){
    return(
      <div>
        <input type="text" placeholder="Write text"/>
      </div>
    )
  }
}

export default TransformText;
