import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Orders", path: "/orders" },
];

export default function ResponsiveSidebar({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex">
      {/* Sidebar */}
      
      <div
        className={`bg-gray-800 text-white w-64 fixed md:static top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 hidden md:block`}
      >

        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          My App
        </div>
        <nav className="mt-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 rounded hover:bg-gray-700 transition ${
                location.pathname === item.path ? "bg-gray-700" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </div>

      {/* Konten utama */}
      <div className="flex-1 min-h-screen bg-gray-100 md:ml-64">
        {/* Navbar */}
        <div className="bg-white shadow-md p-4 flex items-center justify-between md:hidden sticky top-0 z-40">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Sidebar">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-lg font-bold">My App</h1>
        </div>

        {/* Konten halaman */}
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
