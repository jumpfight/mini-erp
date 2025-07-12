import { useEffect, useState } from "react";
import { ambilSummary } from "../api/backend";

const Dashboard = () => {
  const [summary, setSummary] = useState({});

  useEffect(() => {
      //if (!token) return;
  
      ambilSummary()
        .then((data) => setSummary(data))
        .catch(() => setMessage("Gagal ambil data dari Go pakai JWT"));
    }, [token]);

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ background: "#e0f7fa", padding: "20px", borderRadius: "8px" }}>
          <h3>Users</h3>
          <p>{summary.users}</p>
        </div>
        <div style={{ background: "#ffe0b2", padding: "20px", borderRadius: "8px" }}>
          <h3>Orders</h3>
          <p>{summary.orders}</p>
        </div>
        <div style={{ background: "#c8e6c9", padding: "20px", borderRadius: "8px" }}>
          <h3>Revenue</h3>
          <p>{summary.revenue}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
