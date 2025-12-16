import { StrictMode } from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoList from './components/TodoList.jsx'
import CompletedTodos from './components/CompletedTodos.js'

const router=createBrowserRouter([
    {
        element:<App/>,
        children:[{
            path:'/',
            element:<TodoList/>
        },
        {
            path:'/completedTodos',
            element:<CompletedTodos/>
        }
    ]
    }
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>

)
