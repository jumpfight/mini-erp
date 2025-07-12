import React from 'react'
import { CHeader, CContainer, CHeaderBrand, CButton } from '@coreui/react'
import { cilMenu } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const Header = ({ toggleSidebar }) => {
  return (
    <CHeader className="mb-4">
      <CContainer fluid className="d-flex align-items-center">
        <CButton
          color="light"
          className="d-lg-none me-2" // hanya tampil di < 992px
          onClick={toggleSidebar}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CButton>
        <CHeaderBrand>Mini-ERP</CHeaderBrand>
      </CContainer>
    </CHeader>
  )
}

export default Header
