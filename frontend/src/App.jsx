import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveSidebar from "./components/ResponsiveSidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";

export default function App() {
  return (
    <Router>
      <div className="flex">
        <ResponsiveSidebar />
        <div className="flex-1 md:ml-64 p-4">
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