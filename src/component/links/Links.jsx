import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = ({label,to,icon}) => {
  return (
    <NavLink id='link' to={to} className="sidenav-link" >
      <span className="sidenav-icon">{icon}</span>
      <span>{label}</span>
    </NavLink>
  )
}

export default Links
