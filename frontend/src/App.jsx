import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveSidebar from "./components/ResponsiveSidebar";
import DefaultLayout from './layout/DefaultLayout'
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
  );
}