import React from 'react'
import useAuth from '../../../../Hooks/useAuth';
import { Typewriter } from 'react-simple-typewriter'


const AddClass = () => {

    const {user} = useAuth()

    const handleSubmit = () => {
        console.log("hi");
    }



    return (
        <div className='w-full h-full mb-16 '>
            <h1 className='text-3xl text-center mt-16 mb-10'><span className='text-3xl text-[#0beb52]'><Typewriter
                                words={["Add New Classes"]}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            /></span></h1>
            <hr className='w-11/12 mx-auto border-[2px] px-20 my-10' />
            <form onSubmit={handleSubmit}>
                <div className="card md:grid md:grid-cols-2 gap-4 w-full md:p-16  shadow-2xl bg-base-100">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Classes Name</span>
                        </label>
                        <input type="text" name='classesName' placeholder="Name" required className="input input-bordered italic" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL of Relevent Courses</span>
                        </label>
                        <input type="text" name='img' placeholder="image url" className="input input-bordered italic" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" name='instructorName' placeholder="Your name" required defaultValue={user?.displayName} className="input input-bordered italic" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="text" name='instructorEmail' placeholder="Your email" defaultValue={user?.email} className="input input-bordered italic" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="number" name='availableSeats' required className="input input-bordered italic" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Course Fee</span>
                        </label>
                        <input type="number" name='price' placeholder="$" required className="input input-bordered italic" />
                    </div>
                    
                    <input type="submit" value="Add Your Class" className='btn btn-primary col-span-2' />
                </div>
            </form>
        </div>
    )
}

export default AddClass