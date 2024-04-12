import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = ({label,to,icon}) => {
  return (
    <NavLink id='link' to={to}>
      <span></span>
      <span></span>
    </NavLink>
  )
}

export default Links
