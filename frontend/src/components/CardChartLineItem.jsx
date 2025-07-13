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
import { CChartBar,CChartLine } from '@coreui/react-chartjs'
import { useEffect } from 'react'

const CardChartLinetItem=({xs,md,title, label,labels,datas,borderColor})=>{
    return (
        <CCol xs={xs} md={md}>
            <CCard className="mb-4">
                <CCardBody>
                    <CCardTitle>{title}</CCardTitle>
                    <CChartLine
                        data={{
                        labels: labels,
                        datasets: [
                            {
                            label: label,
                            data: datas,
                            borderColor: borderColor,
                            fill: false,
                            },
                        ],
                        }}
                    />

                </CCardBody>
            </CCard>
        </CCol>
    )
}

export default CardChartLinetItem