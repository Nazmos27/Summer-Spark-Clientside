import React from 'react'
import useAuth from '../../../../Hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import UserTableCard from '../Admin/UserTableCard'
import SelectedClassCard from './SelectedClassCard'

const SelectedClasses = () => {

    const {user} = useAuth()
    const {data : selectedClasses=[],refetch} = useQuery({
        queryKey: ['selectedClasses',user?.email],
        queryFn: async () => {
            const result = await axios.get(`https://assignment-12-server-rouge.vercel.app/selectedClasses?email=${user?.email}`)
            console.log(result.data);
            return result.data
        }
    })



  return (
    <div>

      <div>
        <h1 className='text-3xl text-center text-orange-500 md:my-10'>Total Selected Classes : {selectedClasses.length}</h1>
      </div>
      <div className='overflow-auto' >
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Name</th>
                <th>Instructor</th>
                <th>Fee</th>
                <th>Enroll</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                selectedClasses.map((item,index) => <SelectedClassCard
                key={index}
                data = {item}
                order = {index}
                refetch = {refetch}
                ></SelectedClassCard>)
              }
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default SelectedClasses