import React, { useEffect, useState } from 'react'
import ClassCard from './ClassCard'
import { Typewriter } from 'react-simple-typewriter'

const AllClasses = () => {

    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data)
            })
    }, [])

    return (
        <div className='text-center md:my-20 my-10'>
            <h1 className='md:my-10'><span className='text-4xl '><Typewriter
            words={'Popular Classes'}
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