import { useEffect, useState } from "react";
import { ambilSummary } from "../api/backend";

import { CRow,CCol,CCard, CCardBody, CCardTitle, CCardText, CContainer } from '@coreui/react'
import CardDefaultItem from "../components/CardDefaultItem";

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
    <CContainer className="px-0 py-0">
      <CRow className="g-3">
        <CardDefaultItem xs="12" md="4" title="Orders" text={summary.orders}/>
        <CardDefaultItem xs="12" md="4" title="Users" text={summary.users}/>
        <CardDefaultItem xs="12" md="4" title="Revenue" text={summary.revenue}/>      
      </CRow>
    </CContainer>
  );
};

export default Dashboard;
