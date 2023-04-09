import React, { useState } from 'react';
import * as math from 'mathjs';
import './App.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      const result = math.evaluate(input);
      setInput(result);
    } catch (error) {
      setInput('error');
    }
  };

  const backSpace = () => {
    if(input === 'error'){
      setInput("");
    }
    else if(input.length > 1) {
      setInput(input.slice(0, -1));
    } 
    else {
      setInput("");
    }
  }

  return (
    <div className='calculator'>
      <input type="text" value={input} className='input-box'/>
      <div className='hr'></div>
      <div>
        <button onClick={() => backSpace()}> C </button>
        <button onClick={() => handleClick('/')}>+/-</button>
        <button onClick={() => handleClick('/')}>X</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
      <div>
        <button onClick={() => handleClick(7)}>7</button>
        <button onClick={() => handleClick(8)}>8</button>
        <button onClick={() => handleClick(9)}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleClick(0)}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => calculate()}>=</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Basic-Calculator</h1>
      <Calculator/>
    </div>
  );
}

export default App;
