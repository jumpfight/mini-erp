import { useEffect, useState } from "react";
import { ambilSummary } from "../api/backend";

import { CRow,CCol,CCard, CCardBody, CCardTitle, CCardText } from '@coreui/react'

const Dashboard = () => {
  const [summary, setSummary] = useState({});

  useEffect(() => {
      //if (!token) return;
  
      document.title = import.meta.env.VITE_APP_NAME || 'Default App'
      ambilSummary()
        .then((data) => setSummary(data))
        .catch(() => setMessage("Gagal ambil data dari Go pakai JWT"));
    }, []);

  return (
    <CRow className="gap-3">
      <CCol xs={12} md={4}>
        <CCard>
          <CCardBody>
            <CCardTitle>Users</CCardTitle>
            <CCardText>{summary.orders}</CCardText>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={12} md={4}>
        <CCard>
        <CCardBody>
          <CCardTitle>Users</CCardTitle>
          <CCardText>{summary.users}</CCardText>
        </CCardBody>
      </CCard>
      </CCol>

      <CCol xs={12} md={4}>
        <CCard>
          <CCardBody>
            <CCardTitle>Revenue</CCardTitle>
            <CCardText>{summary.revenue}</CCardText>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Dashboard;
