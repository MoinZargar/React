import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  let [counter,setCounter]=useState(15)
  function addval(){
    if(counter<20){
      
      setCounter(counter+1)
    }
  }
  function removeval(){
    if(counter>0){
      
      setCounter(counter-1)
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
