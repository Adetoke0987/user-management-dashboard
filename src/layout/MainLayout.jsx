import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidenav from '../component/navigation/side/Sidenav'

const MainLayout = () => {
    return (
        <div>
            <div>
                <Sidenav />
            </div>

            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
