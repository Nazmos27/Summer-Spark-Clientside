import React from 'react'
import useAuth from '../../../Hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import InstructorCard from './InstructorCard'

const Instructors = () => {
    const {user} = useAuth()
    const token = localStorage.getItem('access-token')
  
  const { data: instructors=[], refetch } = useQuery(['users',user?.email], async () => {
    const result = await fetch('http://localhost:5000/users',{
      headers:{
        authorization : `bearer ${token}`
      }
    })
    return result.json()
  })

  const onlyInstructors = instructors.filter(item => item.role === 'instructor')
  return (
    <div  className=' '>
        <div>
            <p className='md:text-3xl text-xl text-center'>Our Honorable Instructors</p>
        </div>
        <div className='flex flex-col gap-4  '>
            {instructors.length > 0 &&
                onlyInstructors.map(item => <InstructorCard
                key={item._id}
                data = {item}
                ></InstructorCard>)
            }
        </div>
    </div>
  )
}

export default Instructors