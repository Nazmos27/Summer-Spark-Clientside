import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const listItem = <><li> <Link><a>Home</a></Link> </li>
        <li><a> <Link>Instructors</Link> </a></li>
        <li><Link><a>Classes</a></Link></li>
        <li><Link>Log In</Link></li>
        </>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {listItem}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                    <img src="https://i.ibb.co/dPYtwPJ/website-Logo.png" alt="" className='h-20  w-28' />
                    <a className="btn btn-ghost normal-case btn-sm md:btn-lg text-xl">Summer Spark <br />Academy</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {listItem}
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar