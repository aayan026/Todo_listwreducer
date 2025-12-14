import { createContext, useReducer, useState } from 'react'
import './App.css'
import { initialState, reducer } from './reducer/arrReducer'
import TodoList from './components/TodoList'

export const MyContext=createContext()
function App() {
  const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <>
      <MyContext value={{state,dispatch}}>
        <TodoList/>
      </MyContext>
    </>
  )
}

export default App
