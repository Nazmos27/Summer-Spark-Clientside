import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from '../../../../Hooks/useAuth'

const MyClasses = () => {
  const {user} = useAuth()
  const token = localStorage.getItem('access-token')
  
  console.log(token);

  const { data: users = [], refetch } = useQuery(['users',user?.email], async () => {
    const result = await fetch(`http://localhost:5000/myClasses?email=${user?.email}`,{
      headers:{
        authorization : `bearer ${token}`
      }
    })
    return result.json()
  })


  return (
    <div>
        <p>{users.length}</p>
    </div>
  )
}

export default MyClasses