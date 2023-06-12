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
import AllUser from './Components/Layout/UserInterface/Dashboard/Admin/AllUser.jsx';


//query

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import MyClasses from './Components/Layout/UserInterface/Dashboard/Insturctor/MyClasses.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import AdminRoute from './Components/PrivateRoute/AdminRoute.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import SelectedClasses from './Components/Layout/UserInterface/Dashboard/Student/SelectedClasses.jsx';
import EnrolledClasses from './Components/Layout/UserInterface/Dashboard/Student/EnrolledClasses.jsx';
import ManageClass from './Components/Layout/UserInterface/Dashboard/Admin/ManageClass/ManageClass.jsx';


// Create a client
const queryClient = new QueryClient()

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
    path: "/dashboard",
    element:<PrivateRoute> <SideNav></SideNav></PrivateRoute>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "addclass",
        element: <AddClass></AddClass>
      },
      {
        path:"myclasses",
        element:<MyClasses></MyClasses>
      },
      {
        path: "alluser",
        element: <AdminRoute><AllUser></AllUser></AdminRoute>
      },
      {
        path:"selectedClasses",
        element:<SelectedClasses></SelectedClasses>
      },
      {
        path:"enrolledClasses",
        element:<EnrolledClasses></EnrolledClasses>
      },
      {
        path:"allClasses",
        element: <ManageClass></ManageClass>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='md:mx-10 mx-4'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
