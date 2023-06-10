import React from 'react'
import { FaUserCog, FaUserGraduate } from 'react-icons/fa'

const UserTableCard = ({data,order}) => {
    const {name,role} = data
    return (
        <tr>
            <th>{order + 1}</th>
            <td>{name}</td>
            <td>{role}</td>
            <td className='text-center'><button className='btn-sm btn-accent'><FaUserCog className='text-white'></FaUserCog></button></td>
            <td className='text-center'><button className='btn-sm btn-accent'><FaUserGraduate className='text-white'></FaUserGraduate></button></td>
        </tr>
    )
}

export default UserTableCard