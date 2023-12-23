import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  let [counter,setCounter]=useState(15)
  function addval(){
    if(counter<20){
      counter=counter+1;
      setCounter(counter)
    }
  }
  function removeval(){
    if(counter>0){
      counter=counter-1;
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Chai aur code</h1>
     
      <button onClick={addval}>Add value {counter}</button>
       <br/>
      <button onClick={removeval}>Remove value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
