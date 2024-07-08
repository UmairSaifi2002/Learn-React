import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("grey")

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
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

            <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}}>Red</button>

            <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'blue'}}>Blue</button>

            <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}}>Green</button>

            <button onClick={() => setColor('violet')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'violet'}}>Violet</button>

            <button onClick={() => setColor('orange')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'orange'}}>Orange</button>

            <button onClick={() => setColor('yellow')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'yellow'}}>Yellow</button>

            <button onClick={() => setColor('purple')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'purple'}}>Purple</button>

            <button onClick={() => setColor('olive')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'olive'}}>Olive</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
