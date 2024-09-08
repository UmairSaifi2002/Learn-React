import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Now we are using Hooks to update the counter which is present in different part of the code
// usestate hook is responsible to chnge the state of anything that you selected


function App() {

  // using our useState hooks
  // it returns two things 
  // first is value to a variable
  // second is a function to use the value

  let [counter, setCounter] = useState(0)

  // let counter = 5

  let addValue = () => {
    console.log("counter : "+counter);
    if (counter < 20) {
      counter = counter + 1;
    }
    setCounter(counter)
  }

  let removeValue = () => {
    console.log("counter : "+counter);
    if (counter > 0) {
      counter = counter - 1;
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <footer>footer : {counter}</footer>
    </>
  )
}

export default App
