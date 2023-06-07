import React from 'react'
import { useForm } from 'react-hook-form';
import {FaGoogle} from 'react-icons/fa'

import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Registration = () => {
    const {createUser} = useAuth()
    


    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email,data.password)
        .then(res => {
            const loggedUser = res.user
            console.log(loggedUser);
            reset()
        })
        .catch(error => {
            console.log(error.message);
        })
        
    }


// ToDo: 1.implement google registration
//       2.make confirm password field,gender,etc as per requirment
//       3.password validation as per requirment

  return (
    <div>
        <div className="hero min-h-screen md:py-20 bg-base-200 py-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                   
                    <img src="https://i.ibb.co/YjMLPxs/cyber-security-gif-resized-1.gif" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Name</span>
                                </label>
                                <input type="text" {...register("name" , {required:true})} placeholder="Your Name" className="input input-bordered rounded-none" />
                                {errors.name?.type ==='required' && <span className='text-red-600 text-left'>*This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">PhotoURL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="text" placeholder="email" {...register("email", {required:true})} className="input input-bordered rounded-none" />
                                {errors.email?.type ==='required' && <span className='text-red-600 text-left'>*This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Password</span>
                                </label>
                                <input type="text" placeholder="password" {...register("password",{required:true , minLength:6} )} className="input input-bordered rounded-none" />
                                {errors.password?.type ==='minLength' && <span className='text-red-600 text-left text-sm    '>Password must contain atleast 6 character</span>}

                                <p className='text-sm  font-semibold'>Already Have An Account? <Link to="/login" className='underline text-sm'>Log In Now</Link></p>
                                    
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Registraion" className='btn btn-secondary text-white' />
                                <div className="tooltip tooltip-bottom" data-tip="Sign In with Google">
                                    <FaGoogle  className='text-gray-400 text-4xl mx-auto mt-6'></FaGoogle>
                                    </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Registration