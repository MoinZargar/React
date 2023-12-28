import {useContext,createContext} from 'react'

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"message",
            completed:false,
        }
    ],
    addTodo:((todo)=>{}),
    updateTodo:((id,todo)=>{}),
    deleteTodo:((id)=>{}),
    toggleComplete:(id)=>{}
})
export const TodoProvider=TodoContext.Provider
//TodoContext act as global store for components
//TodoProvider act as wrapper for components
//TodoContext.Provider gives access to the data stored in  TodoContext
//useTodo will give you access to data stored in TodoContext in diffrent components 
export function useTodo(){
    return useContext(TodoContext)
}
