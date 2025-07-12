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

const Orders = () => {
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
