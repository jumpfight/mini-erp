// src/components/ResponsiveSidebar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Orders", path: "/orders" },
];

export default function ResponsiveSidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Toggle Button (mobile) */}
      <button
        className="md:hidden p-4"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Sidebar"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-50
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          My App
        </div>
        <nav className="mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)} // auto-close on mobile
              className={`block px-6 py-3 hover:bg-gray-700 transition ${
                location.pathname === item.path ? "bg-gray-700" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
