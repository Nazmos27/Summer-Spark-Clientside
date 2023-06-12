import React from 'react'
import useAuth from '../../../../Hooks/useAuth';
import { Typewriter } from 'react-simple-typewriter'
import axios from 'axios';
import Swal from 'sweetalert2';


const AddClass = () => {

    const {user} = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.className.value
        const image = form.img.value
        const instructor = form.instructorName.value
        const instructor_mail = form.instructorEmail.value
        const available_seats = parseInt(form.availableSeats.value)
        const price = parseInt(form.price.value)
        const newClassData = {
            name,
            image,
            instructor,
            instructor_mail,
            available_seats,
            price,
            status : "pending"
        }
        console.log(newClassData);
        fetch('http://localhost:5000/allClasses',{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newClassData)
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Class has been saved',
                showConfirmButton: false,
                timer: 1500
              })
              e.target.reset()
              
            console.log(data);
        })


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
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" name='className' placeholder="Name" required className="input input-bordered italic" />
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