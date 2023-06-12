import React from 'react'
import { FaBookOpen, FaChalkboard, FaChalkboardTeacher, FaCheckDouble, FaCheckSquare, FaHive, FaHome, FaUsersCog } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'
import useAdmin from '../Hooks/useAdmin'

const SideNav = () => {
    const [isAdmin] = useAdmin()


    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-white items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        {
                            isAdmin === 'admin' &&
                                <>
                                    <li><Link to="/dashboard/allClasses"><FaChalkboard></FaChalkboard> Manage Classes</Link></li>
                                    <li><Link to="/dashboard/alluser"><FaUsersCog></FaUsersCog>Manage Users</Link></li>
                                </> 
}
                       {    
                            isAdmin ==='instructor' &&
                                <>
                                    <li><Link to="/dashboard/addclass"><FaBookOpen></FaBookOpen> Add Class</Link></li>
                                    <li><Link to="/dashboard/myclasses"><FaChalkboardTeacher></FaChalkboardTeacher>My Classes</Link></li>
                                </>
                        }
                        {
                            isAdmin === 'student' && <>
                                <li><Link to="/dashboard/selectedClasses"><FaCheckSquare></FaCheckSquare> My Selected Classes</Link></li>
                                <li><Link to="/dashboard/enrolledClasses"> <FaCheckDouble></FaCheckDouble> My Enrolled Classes</Link></li>
                            </>
                        }


                        <div className='divider'></div>
                        <li> <Link to="/"><FaHome></FaHome> Home</Link> </li>
                        <li><Link to="/"><FaHive></FaHive> All Classes</Link></li>
                    </ul>





                </div>
            </div>
        </div>
    )
}

export default SideNav