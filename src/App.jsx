import { createContext, useReducer, useState } from 'react'
import './App.css'
import { initialState, reducer } from './reducer/arrReducer'
import TodoList from './components/TodoList'
import { Outlet } from 'react-router-dom'

export const MyContext=createContext()
function App() {
  const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <>
      <MyContext value={{state,dispatch}}>
        <Outlet/>
      </MyContext>
    </>
  )
}

export default App
