import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Roote from './routes/roote/Roote'
import Error from './components/Error/Error'
import Contact from './components/Contact/Contact'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Roote></Roote>,
    errorElement: <Error></Error>,
    children:[
      {
        path:"/contacts/:contactId",
        element: <Contact></Contact>
      }
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
