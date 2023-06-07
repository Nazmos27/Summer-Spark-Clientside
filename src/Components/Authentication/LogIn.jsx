import React, { useState } from 'react'
import {FaGoogle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LogIn = () => {
    const [success,setSuccess] = useState('')
    const [error,setError] = useState('')


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/YjMLPxs/cyber-security-gif-resized-1.gif" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered rounded-none" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                                <p className='text-sm text-white font-semibold'>Don't Have An Account? <Link to="/register" className='underline text-sm'>Register Now</Link></p>
                                    <p className='text-xs text-blue-600'>{success}</p>
                                    <p className='text-xs text-red-600'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Log In" className='btn' />
                                <div className="tooltip tooltip-bottom" data-tip="Sign In with Google">
                                    <FaGoogle  className='text-gray-400 text-4xl mx-auto mt-6'></FaGoogle>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn