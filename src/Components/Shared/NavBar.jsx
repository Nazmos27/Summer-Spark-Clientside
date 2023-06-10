import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

const NavBar = () => {
    const { user , logOut } = useAuth()

    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(error => {console.log(error.message)})
    }
    const listItem = <><li> <Link><a>Home</a></Link> </li>
        <li><a> <Link>Instructors</Link> </a></li>
        <li><Link><a>Classes</a></Link></li>
        <li><Link to="/login">Log In</Link></li>
    </>

    // ToDo:toggling menubar in mobile device(line 20)
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-10 mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {listItem}
                            {
                                user && <li><Link to="/dashboard">DashBoard</Link></li>
                            }
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img src="https://i.ibb.co/dPYtwPJ/website-Logo.png" alt="" className='md:h-20  md:w-28 h-16 w-24' />
                        <a className="btn btn-ghost normal-case btn-sm md:btn-lg md:text-xl font-semibold text-sm">Summer Spark <br />Academy</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {listItem}
                        {
                            user && <li><Link to="/dashboard">DashBoard</Link></li>
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <>
                            <div className='flex items-center gap-3'>
                                <div className='tooltip tooltip-bottom ' data-tip={user.displayName}>
                                    <img src={user.photoURL} className='w-12 rounded-full' alt="" />
                                </div>
                                <button onClick={handleLogOut} className='btn btn-primary hidden md:block'>Log Out</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar