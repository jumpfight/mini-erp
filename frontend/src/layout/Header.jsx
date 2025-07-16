import React from 'react'
import { CHeader, CContainer, CHeaderBrand, CButton, CAvatar } from '@coreui/react'
import { cilMenu, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const Header = ({ toggleSidebar }) => {
  return (
    <CHeader className="mb-4">
      <CContainer fluid className="d-flex align-items-center">
        <CButton
          color="light"
          className="d-lg-none me-2"
          onClick={toggleSidebar}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CButton>

        <CHeaderBrand className="me-auto">{import.meta.env.VITE_APP_NAME}</CHeaderBrand>
        
        {/* User Avatar */}
        <CAvatar className="border border-primary" src="/images/user0001.JPG" size="md" />

      </CContainer>
    </CHeader>
  )
}

export default Header
