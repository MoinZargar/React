import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './context/UserContext'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider'
function App() {
 

  return (
    <UserContextProvider >
   
    <h1>React with Chai and share is important</h1>
    <Login/>
    <Profile/>
  
   </UserContextProvider> 
  )
}

export default App
