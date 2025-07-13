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
import { CProgress, CProgressBar } from '@coreui/react'
import { CChartBar,CChartLine } from '@coreui/react-chartjs'
import MqttDisplay from '../components/MqttDisplay'

const Orders = () => {


  useEffect(() => {
    document.title = import.meta.env.VITE_APP_NAME || 'Default App'
  }, [])
  return (
//        <CContainer className="py-3">
  //      </CContainer>
      <CRow className="g-3">
        <CCol xs={12} md={3}>
          <CCard style={{ minHeight: '130px' }}>
            <CCardBody>
              <CCardTitle>Orders</CCardTitle>
              <CCardText>upcoming</CCardText>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={12} md={3}>
          <CCard style={{ minHeight: '130px' }}>
            <CCardBody>
              <CCardTitle>MQTT</CCardTitle>
              <CCardText>test</CCardText>
              <MqttDisplay/>
              <CProgress className="mt-3">
                <CProgressBar value={80} color="info">80%</CProgressBar>
              </CProgress>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={12} md={6}>
          <CCard className="mb-4">
            <CCardBody>
              <CCardTitle>Performance</CCardTitle>
              <CChartLine
                data={{
                  labels: ['1', '2', '3', '4', '5'],
                  datasets: [
                    {
                      label: 'Performance',
                      data: [65, 59, 80, 81, 56],
                      borderColor: '#007bff',
                      fill: false,
                    },
                  ],
                }}
              />

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
  );
};

export default Orders;
