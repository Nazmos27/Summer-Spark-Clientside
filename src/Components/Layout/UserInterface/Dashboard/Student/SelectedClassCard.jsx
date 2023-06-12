import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { ImCoinDollar } from 'react-icons/im'

const SelectedClassCard = ({data,order,refetch}) => {
    const {name,price,instructor} = data



  return (
    <tr>
    <th>{order + 1}</th>
    <td>{name}</td>
    <td>{instructor}</td>
    <td>${price}</td>
    <td className='text-center'>
        
            <button  className='btn-sm btn-secondary'><ImCoinDollar className='text-white'></ImCoinDollar></button>

    </td>
    <td className='text-center'>
        
            <button  className='btn-sm btn-accent'><FaTrash className='text-white'></FaTrash></button>
        
    </td>
</tr>
  )
}

export default SelectedClassCard