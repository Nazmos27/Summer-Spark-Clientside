import React, { useEffect, useState } from 'react'
import ClassCard from './ClassCard'
import { Typewriter } from 'react-simple-typewriter'
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../../../Hooks/useAuth'
import axios from 'axios'

const AllClasses = () => {
    const {user} = useAuth()
    const token = localStorage.getItem('access-token')



    const { data: classes=[], refetch } = useQuery(['classes'], async () => {
        const result = await axios.get('https://assignment-12-server-rouge.vercel.app/allClasses',{
          headers:{
            authorization : `bearer ${token}`
          }
        })
        return result.data
      })

    // const [classes, setClasses] = useState([])
    // useEffect(() => {
    //      fetch('https://assignment-12-server-rouge.vercel.app/allClasses',{
    //         headers:{
    //             authorization : `bearer ${token}`
    //         }
    //      })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setClasses(data)
    //         })
    // }, [])


    const handleSelect = (data) => {
        const selectedClass = {
            name : data.name,
            instructor : data.instructor,
            price : data.price,
            select_by : user?.email,
            status : 'pending'
        }
        fetch('https://assignment-12-server-rouge.vercel.app/selectedClasses',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(selectedClass)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    // refetch()
   

/**
 * ToDo: 1.make heding componenet separately and call in every section
 *       2.istructor name can be link up to their profile or a modal can be used to show their details
 */

    return (
        <div className='text-center md:my-20 my-10'>
            <h1 className='md:my-10 text-4xl'>Popular <span className='text-4xl '><Typewriter
            words={['Classes']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></span></h1>
            <div className='md:grid md:grid-cols-3 md:gap-6'>
                
                {
                    classes.map(item => <ClassCard
                        data={item}
                        handleSelect={handleSelect}
                    ></ClassCard>)
                }
            </div>
        </div>
    )
}

export default AllClasses