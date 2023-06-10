import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UserTableCard from './UserTableCard'

const AllUser = () => {

  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const result = await fetch('http://localhost:5000/users')
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