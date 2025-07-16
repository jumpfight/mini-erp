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
import { CProgress, CProgressBar } from '@coreui/react'
import { useEffect } from 'react'

const CardProgressItem=({xs,md,title, text,value,progress})=>{
    return (
        <CCol xs={xs} md={md}>
            <CCard style={{ minHeight: '130px' }}>
                <CCardBody>
                    <CCardTitle>{title}</CCardTitle>
                    <CCardText>{text}</CCardText>
                    {/* render konten dinamis */}
                    <div>{value}</div>
                    <CProgress className="mt-3">
                        <CProgressBar value={progress} color="info">{progress}%</CProgressBar>
                    </CProgress>
                </CCardBody>
            </CCard>
        </CCol>
    )
}

export default CardProgressItem