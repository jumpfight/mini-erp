import React from 'react'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CNavLink,
  CNavItem,
  CNavTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilUser } from '@coreui/icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = ({visible,onVisibleChange}) => {
  //<CSidebarBrand>Mini-ERP</CSidebarBrand>
  return (
    <CSidebar
      className="border-end sidebar"
      onVisibleChange={onVisibleChange}
      visible={visible}
      breakpoint="lg" // atur breakpoint ke lg (992px)
    >
      <CSidebarNav>
        <CNavTitle>Main</CNavTitle>
        
        <CNavLink
          as={NavLink}
          to="/"
          icon={<CIcon icon={cilSpeedometer} />}
        >
          Home
        </CNavLink>

        <CNavLink
          as={NavLink}
          to="/dashboard"
          icon={<CIcon icon={cilSpeedometer} />}
        >
          Dashboard
        </CNavLink>

        <CNavLink
          as={NavLink}
          to="/orders"
          icon={<CIcon icon={cilUser} />}
        >
          Orders
        </CNavLink>

      </CSidebarNav>
    </CSidebar>
  )
}

export default Sidebar
