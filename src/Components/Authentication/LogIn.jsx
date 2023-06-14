import React, { useState } from 'react'
import {FaGoogle} from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { ToastContainer } from 'react-toastify'
import useTitle from '../Hooks/useTitle'

const LogIn = () => {
    const {signInUser,googleSignIn} = useAuth()
    const [error,setError] = useState('')
    useTitle('Login')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        setError('')
        signInUser(data.email,data.password)
        .then(res => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Sign In Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            const loggedUser = res.user
            console.log(loggedUser);
            navigate(from,{replace:true})
            reset()
            
        })
        .catch(error => {
            setError(error.message);
        })
        
    }
    const handleGoogle = () => {
        googleSignIn()
        .then(res => {
            const loggedUser = res.user
            console.log(loggedUser)
            const saveUser = { name: loggedUser.displayName, email: loggedUser.email, img:loggedUser.photoURL, role: 'student' }
                        fetch('https://assignment-12-server-rouge.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Registration Successful',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            })
        })
        .catch(error => {
            console.log(error.message)
        })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-black">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co/S7mJR8w/regi.gif" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black">
                        <form onSubmit={handleSubmit(onSubmit)}> 
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="text" placeholder="email" {...register("email", {required:true})} className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="text" placeholder="password" {...register("password")} className="input input-bordered rounded-none" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                                <p className='text-sm text-white font-semibold'>Don't Have An Account? <Link to="/register" className='underline text-sm'>Register Now</Link></p>
                                    <p className='text-xs text-red-600'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Log In" className='btn' />
                                <div className="tooltip tooltip-bottom" data-tip="Sign In with Google">
                                    <FaGoogle onClick={handleGoogle} className='text-gray-400 text-4xl mx-auto mt-6'></FaGoogle>
                                    </div>
                                    <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"></ToastContainer>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn