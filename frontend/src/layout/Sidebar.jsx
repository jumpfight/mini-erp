import React from 'react'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CNavItem,
  CNavTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilUser } from '@coreui/icons'
import { Link } from 'react-router-dom'

const Sidebar = ({visible,onVisibleChange}) => {
  //<CSidebarBrand>Mini-ERP</CSidebarBrand>
  return (
    <CSidebar
      className="border-end"
      onVisibleChange={onVisibleChange}
      visible={visible}
      breakpoint="lg" // atur breakpoint ke lg (992px)
    >
      <CSidebarNav>
        <CNavTitle>Main</CNavTitle>
      
<CNavItem
          component={Link}
          to="/"
          icon={<CIcon icon={cilSpeedometer} />}
        >
          Home
        </CNavItem>

        <CNavItem
          component={Link}
          to="/dashboard"
          icon={<CIcon icon={cilSpeedometer} />}
        >
          Dashboard
        </CNavItem>

        <CNavItem
          component={Link}
          to="/orders"
          icon={<CIcon icon={cilUser} />}
        >
          Orders
        </CNavItem>

      
      </CSidebarNav>
    </CSidebar>
  )
}

export default Sidebar
