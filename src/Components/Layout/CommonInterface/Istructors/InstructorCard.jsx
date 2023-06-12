import React from 'react'

const InstructorCard = ({data}) => {
    const {name,email,img} = data
    return (
        
            <div className="card w-2/3 mx-auto h-80 card-side bg-base-100 shadow-xl">
                <figure className='w-1/3'><img src={img} className='md:h-full ' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See Classes</button>
                    </div>
                </div>
            </div>
        
    )
}

export default InstructorCard