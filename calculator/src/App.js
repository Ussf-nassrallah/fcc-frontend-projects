import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [display, setDisplay] = useState("0");

  const handleNumber = (e) => {
    let num = e.target.textContent;
    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  }

  const handleOperator = (e) => {
    let operator = e.target.textContent;
    setDisplay(display + " " + operator + " ");
  }

  const handleEqual = (e) => {
    // eslint-disable-next-line no-eval
    let result = eval(display);
    setDisplay(result);
  }

  const handleDecimal = (e) => {
    let array = display.split(' ');
    const lastElem = array[array.length - 1];
    if (!lastElem.includes('.')) {
      setDisplay(display + '.');
    }
  }

  const handleClear = () => setDisplay('0');

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="row">
          {display}
        </div>
        <div id="clear" className="row" onClick={handleClear}>
          AC
        </div>
        <div id="seven" onClick={handleNumber} className='num'>7</div>
        <div id="eight" className='num' onClick={handleNumber}>8</div>
        <div id="nine" className='num' onClick={handleNumber}>9</div>
        <div id="multiply" onClick={handleOperator}>*</div>
        <div id="four" className='num' onClick={handleNumber}>4</div>
        <div id="five" className='num' onClick={handleNumber}>5</div>
        <div id="six" className='num' onClick={handleNumber}>6</div>
        <div id="divide" onClick={handleOperator}>/</div>
        <div id="one" className='num' onClick={handleNumber}>1</div>
        <div id="two" className='num' onClick={handleNumber}>2</div>
        <div id="three" className='num' onClick={handleNumber}>3</div>
        <div id="add" onClick={handleOperator}>+</div>
        <div id="zero" className='num' onClick={handleNumber}>0</div>
        <div id="decimal" onClick={handleDecimal}>.</div>
        <div id="equals" onClick={handleEqual}>=</div>
        <div id="subtract" onClick={handleOperator}>-</div>
      </div>
    </div>
  );
}

export default App;
