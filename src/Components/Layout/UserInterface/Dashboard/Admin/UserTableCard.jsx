import React from 'react'
import { FaUserCog, FaUserGraduate } from 'react-icons/fa'
import Swal from 'sweetalert2'

const UserTableCard = ({data,order,refetch}) => {
    const {name,role,_id} = data
    const handleAdmin = (user) => {
        console.log(user);
        fetch(`https://assignment-12-server-rouge.vercel.app/users/admin/${user._id}`,{
            method:"PATCH"
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user.name} Is Now An Admin`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }


    const handleInstructor = (user) => {
        console.log(user);
        fetch(`https://assignment-12-server-rouge.vercel.app/users/instructor/${user._id}`,{
            method:"PATCH"
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user.name} Is Now An Instructor`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <tr>
            <th>{order + 1}</th>
            <td>{name}</td>
            <td>{role}</td>
            <td className='text-center'>
                {
                    role === 'admin' ? <button disabled={true} className='btn-sm btn-ghost'><FaUserCog className='text-white'></FaUserCog></button> 
                    :
                    <button onClick={() => handleAdmin(data)} className='btn-sm btn-primary'><FaUserCog className='text-white'></FaUserCog></button>
                }
            </td>
            <td className='text-center'>
                {
                    role === 'instructor' ? <button disabled={true} className='btn-sm btn-ghost'><FaUserGraduate className='text-white'></FaUserGraduate></button>
                    :
                    <button onClick={() => handleInstructor(data)} className='btn-sm btn-accent'><FaUserGraduate className='text-white'></FaUserGraduate></button>
                }
            </td>
        </tr>
    )
}

export default UserTableCard