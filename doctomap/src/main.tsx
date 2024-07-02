import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './output.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Hospitals from './pages/Hospitals';
import Doctors from './pages/Doctors';
import DoctorUpdate from './pages/DoctorUpdate';
import HospitalUpdate from './pages/HospitalUpdate';




//Creation of router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/hospitals",
    element: <Hospitals />
  },
  {
    path: "/hospitalUpdate",
    element: <HospitalUpdate />
  },
  {
    path: "/doctors",
    element: <Doctors />
  },
  {
    path: "/doctorUpdate",
    element: <DoctorUpdate />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* stricMode is the one which gives us all the errors in the navigator .  */}
     
    <RouterProvider router={router} />
   
  </React.StrictMode>,
)
