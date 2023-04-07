import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Books from './components/Books/Books'
import About from './components/About/About'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'books',
                element: <Books></Books>
            },
            {
                path:'abouts',
                element: <About></About>
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router}></RouterProvider> )
