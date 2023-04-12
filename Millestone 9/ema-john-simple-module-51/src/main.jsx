import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/Layout/Home';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Error from './components/Error/Error';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import { cartProductsLoader } from './Loder/cartProductsLoader';

const router = createBrowserRouter([{
  path: '/',
  element: <Home></Home>,
  errorElement: <Error></Error>,
  children: [
    {
      path: '/',
      element: <Shop></Shop>
    },
    {
      path: '/order',
      element: <Order></Order>,
      loader: cartProductsLoader
    },
    {
      path: '/inventory',
      element: <Inventory></Inventory>
    }
    ,{
      path: '/login',
      element: <Login></Login>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
