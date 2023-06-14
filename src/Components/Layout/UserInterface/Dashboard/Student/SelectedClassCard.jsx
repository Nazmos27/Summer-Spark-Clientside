import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { ImCoinDollar } from 'react-icons/im'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const SelectedClassCard = ({data,order,refetch}) => {
    const {_id,name,price,instructor} = data
    const handleDelete = (id) => {
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.isConfirmed) {
              fetch(`http://localhost:5000/selectedClasses?id=${id}`, {
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(data => {
                      console.log(data)
                      if (data.deletedCount > 0) {
                          Swal.fire(
                              'Deleted!',
                              'This Class has been deleted.',
                              'success'
                          )
                          refetch()
                      }
                  })

          }
      })
  }



  return (
    <tr>
    <th>{order + 1}</th>
    <td>{name}</td>
    <td>{instructor}</td>
    <td>${price}</td>
    <td className='text-center'>
        
            <button className='btn-sm btn-secondary'><Link to={`/dashboard/payment/${data._id}`}><ImCoinDollar className='text-white'></ImCoinDollar></Link></button>

    </td>
    <td className='text-center'>
        
            <button onClick={() => handleDelete(_id)}  className='btn-sm btn-accent'><FaTrash className='text-white'></FaTrash></button>
        
    </td>
</tr>
  )
}

export default SelectedClassCard