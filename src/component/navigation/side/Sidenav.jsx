import React from 'react'
import Links from '../../links/Links'
import {AiOutlineHome, AiOutlineLogin} from "react-icons/ai"



const Sidenav = () => {
    const path = [
        {to:"/", label:"Home", icon:<AiOutlineHome/>},
        {to:"/admin", label:"Admin", icon:<AiOutlineLogin/>},
        {to:"/login", label:"Login", icon: <AiOutlineLogin/>},
        {to:"/setting", label:"Settings", icon:<AiOutlineLogin/>},
        {to:"/user", label:"Users", icon:<AiOutlineLogin/>}
    ]
  return (
    <div>
      {
        path.map(({to,label,icon})=>(
            <Links/>
        ))
      }
    </div>
  )
}

export default Sidenav