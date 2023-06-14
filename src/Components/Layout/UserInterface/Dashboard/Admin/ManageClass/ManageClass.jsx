import React from 'react'
import useAuth from '../../../../../Hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useTitle from '../../../../../Hooks/useTitle'

const ManageClass = () => {
  useTitle('Manage Classes')
    const {user} = useAuth()
    const {data : allClasses = [],refetch} = useQuery({
        queryKey:['allClasses',user?.email],
        queryFn: async () => {
            const result = await axios.get("https://assignment-12-server-rouge.vercel.app/allClasses")
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