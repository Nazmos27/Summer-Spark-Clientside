import React from 'react'

const ClassCard = ({ data , handleSelect}) => {

    const { name, image, price, available_seats, instructor } = data

    

    return (
        <div>
            <div>
                <div className="card w-88 h-[500px] bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>by <span className='text-blue-500'>{instructor}</span> </p>
                        <p>Course Fee: ${price}</p>
                        <p>Available:{available_seats}</p>
                        <div className="card-actions">
                            <button onClick={() => handleSelect(data)} className="btn btn-primary text-white">Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassCard