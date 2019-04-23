import React from 'react';
import './Button.css';

function Button {
    return (
        <div className="calculator">
        <input type="number" />
        <div className="calculator-buttons">
          <button className="calculator-btn clear">C</button>
          <button className="calculator-btn">÷</button>
          <button className="calculator-btn">7</button>
          <button className="calculator-btn">8</button>
          <button className="calculator-btn">9</button>
          <button className="calculator-btn">×</button>
          <button className="calculator-btn">4</button>
          <button className="calculator-btn">5</button>
          <button className="calculator-btn">6</button>
          <button className="calculator-btn">−</button>
          <button className="calculator-btn">1</button>
          <button className="calculator-btn">2</button>
          <button className="calculator-btn">3</button>
          <button className="calculator-btn">+</button>
          <button className="calculator-btn zero">0</button>
          <button className="calculator-btn">=</button>
        </div>
        </div>
    )
}




export default NumberButton
