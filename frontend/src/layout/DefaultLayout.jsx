import React, {useEffect,useState} from 'react'
import { CContainer, CHeader, CFooter } from '@coreui/react'
import { Outlet } from "react-router-dom"

import Sidebar from './Sidebar'
import Header from './Header'

const DefaultLayout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992)

  // deteksi perubahan ukuran layar
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992
      setIsMobile(mobile)
      setSidebarVisible(!mobile) // tampil jika bukan mobile
    }

    handleResize() // run di awal
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="d-flex">
      <Sidebar 
        visible={sidebarVisible}
        onVisibleChange={(val) => setSidebarVisible(val)}
        overlaid={isMobile}
      />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light w-100">
        <Header toggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
        <div className="body flex-grow-1 px-3">
          <CContainer fluid>
            <Outlet />
            {children}
          </CContainer>
        </div>
        <CFooter className="mt-auto">Mini-ERP ©2025</CFooter>
      </div>
    </div>
  )
}

export default DefaultLayout
