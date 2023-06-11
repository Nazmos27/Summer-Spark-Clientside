import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    if(loading){
       return <progress className='progress w-full'></progress>
    }
    if(user){
        return children
    }
    else{
        toast('you have to login first')
        return <Navigate to='/login' state={{from:location}} replace={true}></Navigate>
    }
  
}

export default PrivateRoute