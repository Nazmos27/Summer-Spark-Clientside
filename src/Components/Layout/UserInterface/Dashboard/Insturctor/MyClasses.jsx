import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from '../../../../Hooks/useAuth'
import MyClassCard from './MyClassCard'

const MyClasses = () => {
  const {user} = useAuth()
  const token = localStorage.getItem('access-token')
  
  // console.log(token);

  const { data: users = [], refetch } = useQuery(['users',user?.email], async () => {
    const result = await fetch(`http://localhost:5000/myClasses?email=${user?.email}`,{
      headers:{
        authorization : `bearer ${token}`
      }
    })
    return result.json()
  })


  return (
    <div className='my-16 '>
       <div>
        <h1 className='text-4xl text-yellow-500 text-center md:my-20 my-10'>My Classes : {users.length}</h1>
       </div>
       <div className='md:grid md:grid-cols-2 gap-4'>
        {
          users.map(item => <MyClassCard
          key={item._id}
          data = {item}
          ></MyClassCard>)
        }
       </div>
    </div>
  )
}

export default MyClasses