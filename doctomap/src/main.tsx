import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './output.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';




//Creation of router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/create",
    element: <h1>Create</h1>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* stricMode is the one which gives us all the errors in the navigator .  */}
     
    <RouterProvider router={router} />
   
  </React.StrictMode>,
)
