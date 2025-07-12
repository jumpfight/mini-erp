import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ResponsiveSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth < 768) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile && (
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{ margin: 10 }}
        >
          ☰
        </button>
      )}
      <Sidebar collapsed={collapsed}>
        <Menu>
          <MenuItem><Link to="/">Home</Link></MenuItem>
          <MenuItem><Link to="/dashboard">Dashboard</Link></MenuItem>
          <MenuItem><Link to="/orders">Orders</Link></MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default ResponsiveSidebar;
