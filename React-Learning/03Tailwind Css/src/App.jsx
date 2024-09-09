import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Car from "./components/Car";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: 'umair',
    age: 21
  }
  let Arr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Car username ='chaiaurcode' Obj = {myObj} Arr = {Arr} btnText = 'Click Me'/>
      <Car username ='apnaCollege' Obj = {myObj} Arr = {Arr} btnText = 'Visit Me'/>      
    </>
  );
}

export default App;
