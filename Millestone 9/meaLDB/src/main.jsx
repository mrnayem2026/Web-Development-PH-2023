import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>, 
    errorElement: <Error></Error>,
    loader: fetch('https://restcountries.com/v3.1/region/asia'),
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
