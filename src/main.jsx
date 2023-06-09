import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from './Components/Shared/NavBar.jsx';
import Main from './Components/Layout/CommonInterface/Home/Main.jsx';
import Home from './Components/Layout/CommonInterface/Home/Home.jsx';
import LogIn from './Components/Authentication/LogIn.jsx';
import Registration from './Components/Authentication/Registration.jsx';
import AuthProvider from './Components/Providers/AuthProvider.jsx';
import SideNav from './Components/Shared/SideNav.jsx';
import AddClass from './Components/Layout/UserInterface/Dashboard/Insturctor/AddClass.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      }
    ]
  },
  {
    path:"/dashboard",
    element:<SideNav></SideNav>,
    children:[
      {
        path:"addclass",
        element:<AddClass></AddClass>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='md:mx-10 mx-4'>
      <RouterProvider router={router} />
      </div></AuthProvider>
  </React.StrictMode>,
)
