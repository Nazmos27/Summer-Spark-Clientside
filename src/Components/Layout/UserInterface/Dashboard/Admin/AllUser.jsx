import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UserTableCard from './UserTableCard'
import useTitle from '../../../../Hooks/useTitle'

const AllUser = () => {
  const token = localStorage.getItem('access-token')
  useTitle('Manage Users')
  
  const { data: users=[], refetch } = useQuery(['users'], async () => {
    const result = await fetch('https://assignment-12-server-rouge.vercel.app/users',{
      headers:{
        authorization : `bearer ${token}`
      }
    })
    return result.json()
  })



  return (
    <div>

      <div>
        <h1 className='text-3xl text-center text-orange-500 md:my-10'>Total Users : {users.length}</h1>
      </div>
      <div className='overflow-auto' >
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Status</th>
                <th>Make Admin</th>
                <th>Make Instructor</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                users.map((item,index) => <UserTableCard
                key={index}
                data = {item}
                order = {index}
                refetch = {refetch}
                ></UserTableCard>)
              }
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default AllUser