import React from 'react'
import { FaBookOpen,  FaChalkboard, FaChalkboardTeacher, FaHive, FaHome, FaUsersCog } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'

const SideNav = () => {
    const isAdmin = true

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        {
                            isAdmin ?
                                <>
                                    <li><Link to="/dashboard/addclass"><FaChalkboard></FaChalkboard> Manage Classes</Link></li>
                                    <li><Link to="/dashboard/alluser"><FaUsersCog></FaUsersCog>Manage Users</Link></li>
                                </> :
                                <>
                                    <li><Link to="/dashboard/addclass"><FaBookOpen></FaBookOpen> Add Class</Link></li>
                                    <li><Link><FaChalkboardTeacher></FaChalkboardTeacher>My Classes</Link></li>
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