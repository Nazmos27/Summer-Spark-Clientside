import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import useAdmin from '../Hooks/useAdmin'

const AdminRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    const [isAdmin,isLoading] = useAdmin()
    if(loading || isLoading){
       return <progress className='progress w-full'></progress>
    }
    if(user && isAdmin){
        return children
    }
    else{
        toast('Admin Protceted Route!')
        return <Navigate to='/' state={{from:location}} replace={true}></Navigate>
    }
  
}

export default AdminRoute
