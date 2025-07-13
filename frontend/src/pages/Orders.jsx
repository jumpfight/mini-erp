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
import CardDefaultItem from '../components/CardDefaultItem'
import CardProgressItem from '../components/CardProgressItem'
import CardChartLinetItem from '../components/CardChartLineItem'

const Orders = () => {


  useEffect(() => {
    document.title = import.meta.env.VITE_APP_NAME || 'Default App'
  }, [])
  return (
//        <CContainer className="py-3">
  //      </CContainer>
      <CRow className="g-3">
        <CardDefaultItem xs="12" md="3" title="Orders" text="upcoming soon"/>
        <CardProgressItem xs="12" md="3" title="MQTT" text="test" value={<MqttDisplay/>} progress="75"/>
        <CardChartLinetItem xs="12" md="6" title="Performance" label="Performance" labels={['1', '2', '3', '4', '5']} 
        datas={[65, 59, 80, 81, 56]} borderColor='#007bff' />
      </CRow>
  );
};

export default Orders;
