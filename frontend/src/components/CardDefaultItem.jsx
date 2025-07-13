import {
  CContainer,
  CForm,
  CFormInput,
  CButton,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CAlert,
  CRow,
  CCol,
} from '@coreui/react'
import { useEffect } from 'react'

const CardDefaultItem=({xs,md,title, text})=>{
    return (
        <CCol xs={xs} md={md}>
            <CCard style={{ minHeight: '130px' }}>
                <CCardBody>
                    <CCardTitle>{title}</CCardTitle>
                    <CCardText>{text}</CCardText>
                </CCardBody>
            </CCard>
        </CCol>
    )
}

export default CardDefaultItem