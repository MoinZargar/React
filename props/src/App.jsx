import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 let obj={
  name:"Moin",
  College:"NIT Srinagar",
 }
 let arr=[1,2,3,4,5]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-4'>Chai aur Code </h1>
     
      <Card username="Moin Zargar" buttonText="Submit"/>
      <Card username="Hitesh" buttonText="Vist me" />
    </>
  )
}

export default App
