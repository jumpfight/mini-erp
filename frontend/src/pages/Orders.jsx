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
} from '@coreui/react'
import { useEffect } from 'react'

const Orders = () => {


useEffect(() => {
  document.title = import.meta.env.VITE_APP_NAME || 'Default App'
}, [])
  return (
        <CContainer className="py-4">
          <CCard>
            <CCardBody>
              <CCardTitle>Orders</CCardTitle>
              <CCardText>upcoming</CCardText>
            </CCardBody>
          </CCard>
        </CContainer>
  );
};

export default Orders;
