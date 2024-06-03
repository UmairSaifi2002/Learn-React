import { useState } from 'react' // yaha jo ham use state import kara rhe h to y hooks k concept ho ja ta h
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// let counter = 0

function App() {
  // aur hamesa jab bhi ham useState ko use krtey h to usse do variable m store karaty h
  // is mese first ko value assign hoti h aur second ko function milta h
  // kyuki useState hame do values provide krta h
  // see below how we handle this
  // to ham isse ek array m store krtey h
  // aur 0th index pr hamri value hoti h jisy 1st index wala method operate krta h
  let [counter,setcounter] = useState(0) // that's how we can hook this useState method
  // const [count, setCount] = useState(0)
  //counter = 0;
  const AddValue = () => {
    console.log("Counter is increased by one", counter);
    //counter = counter + 1
    if (counter < 20)  setcounter(counter + 1) 
  }
  
  const SubtractValue = () => {
    console.log("Counter is decreased by one", counter);
    //counter = counter - 1
    if (counter > 0)  setcounter(counter - 1)
  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={AddValue}  >Add value {counter}</button>
      <button onClick={SubtractValue} >subtract value {counter}</button>
    </>
  )
}

export default App
