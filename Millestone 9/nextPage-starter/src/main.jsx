import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children:[
            // {
            //     path:'/',
            //     element: 
            // }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router}></RouterProvider> )
