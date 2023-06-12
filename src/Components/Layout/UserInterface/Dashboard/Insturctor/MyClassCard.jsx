import React from 'react'

const MyClassCard = ({data}) => {
    const {name,available_seats,price,image,status} = data

    /**
     * ToDo: 1.make status colorful,red when denied
     */

    return (
        <div>
            <div className="card w-96 h-[450px] bg-base-100 shadow-xl">
                <figure className='px-10 pt-10'><img src={image} alt="car!" className='h-36 w-36'/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Available Seats : {available_seats}</p>
                    <p>Price : {price}</p>
                    <p>{status}!</p>
                    <p>Feedback</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyClassCard