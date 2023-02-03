import React, { useState } from 'react';
import "./Sidebar.css"
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sidebar">
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Sidebar</button>
      <nav className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="/">Contact</a>
      </nav>
    </div>
  );
};

export default Sidebar;
