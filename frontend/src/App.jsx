import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
//import Sidebar from './components/Sidebar';
import ResponsiveSidebar from './components/ResponsiveSidebar';

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <ResponsiveSidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
