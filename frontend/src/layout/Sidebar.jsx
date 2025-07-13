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
import { cilHome, cilSpeedometer, cilUser } from '@coreui/icons'
import { Link, NavLink } from 'react-router-dom'
import SidebarNavItem from '../components/SidebarNavItem'

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
       
        <SidebarNavItem to="/" icon={cilHome} label="Home" />
        <SidebarNavItem to="/dashboard" icon={cilSpeedometer} label="Dashboard" />
        <SidebarNavItem to="/orders" icon={cilUser} label="Orders" />

      </CSidebarNav>
    </CSidebar>
  )
}

export default Sidebar
