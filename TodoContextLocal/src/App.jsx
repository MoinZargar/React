import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './Context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const[todos,setTodo]=useState([])
  const addTodo=(todo)=>{
    setTodo((prev)=>[...prev,{id:Date.now(),...todo}])
  }
  const updateTodo=(id,todo)=>{
    setTodo((prev)=>prev.map(prevTodo=>(prev.id===id)?todo:prevTodo))
  }
  const deleteTodo=(id)=>{
    setTodo((prev)=>prev.filter(prevTodo=>(prevTodo.id!=id)))
  }

  const toggleComplete=(id)=>{
    setTodo(prev=>prev.map(prevTodo=>(prevTodo.id===id)?{...prevTodo,completed:!(prevTodo.completed)}:prevTodo))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
     setTodo(todos)
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map(todo=>(
                          <div className='w-full' key={todo.id}>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
   </TodoProvider>
  )
  
}

export default App
