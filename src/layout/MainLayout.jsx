import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidenav from '../component/navigation/side/Sidenav'
import './mainlayout.css'

const MainLayout = () => {
    return (
        <div id='layout'>
            <div id='side-nav'>
                <Sidenav />
            </div>

            <div id='display'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
