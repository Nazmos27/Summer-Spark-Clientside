import React from 'react'
import useAuth from '../../../../../Hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const ManageClass = () => {
    const {user} = useAuth()
    const {data : allClasses = [],refetch} = useQuery({
        queryKey:['allClasses',user?.email],
        queryFn: async () => {
            const result = await axios.get("http://localhost:5000/allClasses")
            return result.data
        }
    })
    
  return (
    <div>
        {allClasses.length}
    </div>
  )
}

export default ManageClass