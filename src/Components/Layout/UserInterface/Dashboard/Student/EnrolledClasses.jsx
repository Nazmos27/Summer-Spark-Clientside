import React, { useEffect, useState } from 'react'
import useAuth from '../../../../Hooks/useAuth'

const EnrolledClasses = () => {
  const { user } = useAuth()
  const [enrolled, setEnrolled] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/payments?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setEnrolled(data)
      })
  }, [])
  return (
    <div>
      <p className='text-4xl text-center'>EnrolledClasses</p>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                enrolled.map((item,index) => <tr className="bg-base-200">
                <th>{index+1}</th>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.date}</td>
              </tr>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EnrolledClasses