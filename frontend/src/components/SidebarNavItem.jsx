// src/components/SidebarNavItem.jsx
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { CNavItem } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const SidebarNavItem = ({ to, icon, label }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <CNavItem className={isActive ? 'active' : ''} style={{ padding: 0 }}>
      <NavLink
        to={to}
        className="nav-link d-flex align-items-center"
        style={{ padding: '0.75rem 1rem', display: 'flex' }}
      >
        {icon && <CIcon icon={icon} className="me-2" />}
        {label}
      </NavLink>
    </CNavItem>
  )
}

export default SidebarNavItem
