import { useState, useCallback, useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Below we set values for upcoming changes when any particular activity is detects
  const [length, setlength] = useState(8) // here we set a default length of password
  const [numberAllowed, setnumberAllowed] = useState(false) // here we set numberAllowed as false as initial
  const [characterAllowed, setcharacterAllowed] = useState(false) //here we set Character Allowed as false as initial
  const [password, setpassword] = useState("") //here we set password as the initial welcome screen appears to the user

  // Now we create a Password Generator Methods to Generate random password.
  // Using useCallback Hook
  // useCallback hamara cheezo ko memorize karne m help krta h mtlb
  // useCallback hamara varibles or values ko chache m store kr k rakhta h future use k liye
  const passwordgenerator = useCallback(() => {

    let pass = "" // here we setting password initially NULL
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // here we are setting allthe possibility of string in password
    if(numberAllowed) str+="0123456789" // here we add number in string if it is allowed
    if(characterAllowed) str+="1!@#$%^&*()_+=-`,./'[]\{}|:<>?" // here we add number in character if it is allowed

    // Below for loop is running for the password Generation
    for (let index = 1; index <= length; index++) {
      let char = Math.floor((Math.random()*str.length) + 1)
      pass = pass + str.charAt(char)
    }

    // here we are setting the value pf pass inpassword
    setpassword(pass)
  },[length,numberAllowed,characterAllowed,setpassword]) // <- These all are dependencies whihch we wanted to be optimized
  // that's why we use useCallback for storing this in chache memory

  const copyPasswordToClipboard = useCallback(() => {
    // here we will know about how we write a code to copt to clipboard to the user computer
    passwordRef.current?.select() // it will give the appearance of the selection of password
    passwordRef.current?.setSelectionRange(0,30) // it will select or copy the password upto the range given here
    window.navigator.clipboard.writeText(password)
  },[password])

  // Using useEffect Hook
  // jab bhi hamara page load hoga to first time pr y call hoga
  // aur agr iski dependencies k sath koi bhi changes huay to y function phir se run ho jayga immidiatly
  useEffect(() => {
    passwordgenerator()
  }, [length, numberAllowed, characterAllowed, passwordgenerator])

  // Using useRef Hook
  const passwordRef = useRef(null)

  return (
    <>
      {/* <h1 className='text-4xl text-center'>Password Generator</h1> */}
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-violet-600 bg-gray-700 text-center'>
      <h1 className='text-white  text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard} 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6} 
            max={30} 
            value={length} 
            className='cursor-pointer' 
            onChange={(e) => {setlength(e.target.value)}} // it give the length of the password to the setlength function
            />
            <label className='text-white'>Length:{length}</label>
          </div>
          <div className='flex items-center g-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {numberAllowed}
            id='numberInput'
            onChange={ () => {setnumberAllowed((prev) => !prev); } } // this is for toogle a value true & false while we check aur uncheck the checkbox
             />
             <label className='text-white'>Numbers</label>
          </div>
          <div className='flex items-center g-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {characterAllowed}
            id='numberInput'
            onChange={ () => {setcharacterAllowed((prev) => !prev); } } // this is for toogle a value true & false while we check aur uncheck the checkbox
             />
             <label className='text-white'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
