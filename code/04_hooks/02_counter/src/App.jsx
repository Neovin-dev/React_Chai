import { useState } from 'react'
// import React from 'react' is not needed here as we are not using any React features that require it, like JSX.
// but if we were using JSX, we would need to import React from 'react' as
import './App.css'

function App() {
  // using useState hook to create a state variable called counter and a function to update it
  const [counter, setCounter] = useState(0);
  // we get back two things from useState, the first one is the state variable and the second one is the function to update the state variable.
  
  // let counter = 15;

  const addValue = () => {
    setCounter(counter + 1);
    console.log("Counter value after incrementing: ", counter);
    // this will not update the UI as we are not using state here, we are just using a regular variable so we are using console.log to see the value of counter
  }

  const removeValue = () => {
    if(counter <= 0){
      console.log("Counter value cannot be less than 0");
      return; // this will stop the function from running if counter is less than 0
    }
    setCounter(counter - 1);
  }

  // we can use onClick to add functionality to the button but we will not do that here as we are just trying to understand how hooks work and how they are used in react.
  return (
    <>
      <h1>chai code</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick = {addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>

      <footer>
        <p>Current counter value: {counter}</p>
      </footer>

    </>
  )
}

export default App
