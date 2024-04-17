import React from 'react'
import Links from '../../links/Links'
import { IoHome } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import './side.css'



const Sidenav = () => {
    const path = [
        {to:"/", label:"Home", icon:<IoHome/>},
        {to:"/admin", label:"Admin", icon:<RiAdminFill/>},
        {to:"/login", label:"Login", icon: <IoMdLogIn/>},
        {to:"/setting", label:"Settings", icon:<IoMdSettings/>},
        {to:"/user", label:"Users", icon:<FaUsers/>}
    ]
  return (
    <div>
      {
        path.map(({to,label,icon})=>(
            <Links key={label} to={to} label={label} icon={icon} />
        ))
      }
    </div>
  )
}

export default Sidenav
