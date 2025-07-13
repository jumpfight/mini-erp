import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { CCollapse } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const SidebarNavItem = ({ to, icon, label, children }) => {
  const location = useLocation()
  const hasChildren = !!children
  const isActive = to && location.pathname === to
  const isChildActive = hasChildren && React.Children.toArray(children).some(child => {
    return location.pathname.startsWith(child.props.to)
  })

  const [open, setOpen] = useState(isChildActive)

  useEffect(() => {
    if (isChildActive) setOpen(true)
  }, [location.pathname])

  if (!hasChildren) {
    return (
      <li className={`nav-item ${isActive ? 'active' : ''}`}>
        <NavLink
          to={to}
          className="nav-link d-flex align-items-center"
        >
          {icon && <CIcon icon={icon} className="me-2" />}
          {label}
        </NavLink>
      </li>
    )
  }

  return (
    <>
      <li
        className="nav-item d-flex align-items-center"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer', padding: '0.5rem 1rem' }}
      >
        {icon && <CIcon icon={icon} className="me-2" />}
        {label}
        <span className="ms-auto">{open ? '▾' : '▸'}</span>
      </li>
      
      <CCollapse visible={open}>
        <ul className="nav flex-column ps-4">
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              className: 'subitem',
            })
          )}
        </ul>
      </CCollapse>
    </>
  )
}

export default SidebarNavItem
