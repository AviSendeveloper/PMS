import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../layouts/NavBar'
import SideBar from '../layouts/SideBar'
import Footer from '../layouts/Footer'
import RightSideBar from '../layouts/RightSideBar'

const Wrapper = () => {
    return (
        <div className="wrapper">

            {/* Preloader */}
            <div className="preloader flex-column justify-content-center align-items-center">
                <img className="animation__shake" src="/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60" />
            </div>

            <NavBar />

            <SideBar />

            {/* Content Wrapper. Contains page content */}
            <Outlet />
            {/* /.content-wrapper */}

            <Footer />

            <RightSideBar />
        </div>
    )
}

export default Wrapper