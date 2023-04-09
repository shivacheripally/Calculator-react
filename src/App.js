import React, { useState } from 'react';
import * as math from 'mathjs';
import './App.css';

function Calculator() {
  // State variable to store input
  const [input, setInput] = useState('');

  // Function to handle click of numeric or operator buttons
  const handleClick = (value) => {
    // Check if input is 'error' and reset it
    if(input === 'error') setInput('');
    // Append the clicked button value to the input
    else setInput(input + value);
  };

  // Function to calculate the result of the input expression
  const calculate = () => {
    try {
      // Evaluate the input expression using math.js library
      const result = math.evaluate(input);
      // Update the input state with the calculated result
      setInput(result);
    } catch (error) {
      // If there's an error while evaluating the expression, set the input to 'error'
      setInput('error');
    }
  };

  // Function to clear the input
  const clearAll = () => {
    setInput("");
  }

  // Function to toggle between positive and negative input
  const plusMinus = () => {
    // Parse the input to float
    const parsedInput = parseFloat(input);
    // Check if the parsed input is a number
    if (!isNaN(parsedInput)) {
      // If it's a negative number, make it positive. If it's positive, make it negative.
      setInput(parsedInput < 0 ? Math.abs(parsedInput) : -1 * parsedInput);
    } else {
      // If the parsed input is not a number, set the input to 'error'
      setInput('error');
    }
  };  

  // Function to delete the last character from the input
  const backSpace = () => {
    // Check if input is 'error' and reset it
    if(input === 'error'){
      setInput("");
    }
    // Remove the last character from the input if it has length greater than 1
    else if(input.length > 1) {
      setInput(input.slice(0, -1));
    } 
    // Reset the input if it has length 1
    else {
      setInput("");
    }
  }

  // Render the Calculator UI
  return (
    <div className='calculator'>
      <input type="text" value={input} className='input-box'/>
      <div>
        <button onClick={() => clearAll()}> C </button>
        <button onClick={() => plusMinus()}>+/-</button>
        <button onClick={() => backSpace('/')}><i class="fa-solid fa-rectangle-xmark"></i></button>
        <button className='fun-btn' onClick={() => handleClick('/')}><i class="fa-solid fa-divide"></i></button>
      </div>
      <div>
        <button onClick={() => handleClick(7)}>7</button>
        <button onClick={() => handleClick(8)}>8</button>
        <button onClick={() => handleClick(9)}>9</button>
        <button className='fun-btn' onClick={() => handleClick('*')}><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button className='fun-btn' onClick={() => handleClick('-')}><i class="fa-solid fa-minus"></i></button>
      </div>
      <div>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button className='fun-btn' onClick={() => handleClick('+')}><i class="fa-solid fa-plus"></i></button>
      </div>
      <div>
        <button className='zero-btn' onClick={() => handleClick(0)}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button className='fun-btn-eq' onClick={() => calculate()}><i class="fa-solid fa-equals"></i></button>
      </div>
    </div>
  );
}
//create app function and export it
function App() {
  return (
    <div className="App">
      <h1>Basic-Calculator</h1>
      <Calculator/>
    </div>
  );
}

export default App;
