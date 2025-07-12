import { Link } from "react-router-dom";

const Sidebar = () => (
  <div style={{ width: "200px", background: "#f4f4f4", padding: "20px" }}>
    <h2>ERP Mini</h2>
    <nav>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/orders">Orders</Link></li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
