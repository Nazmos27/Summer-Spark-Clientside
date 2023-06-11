import React, { useEffect, useState } from 'react'
import ClassCard from './ClassCard'
import { Typewriter } from 'react-simple-typewriter'
import { useQuery } from '@tanstack/react-query'

const AllClasses = () => {
    const token = localStorage.getItem('access-token')

    const [classes, setClasses] = useState([])
    useEffect(() => {
         fetch('http://localhost:5000/allClasses',{
            headers:{
                authorization : `bearer ${token}`
            }
         })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data)
            })
    }, [])

   

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
                    ></ClassCard>)
                }
            </div>
        </div>
    )
}

export default AllClasses