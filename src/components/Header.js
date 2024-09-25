import React from 'react';
import './Header.css';  // We'll create this CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        {/* You can replace the src with the path to your logo */}
        <img src="/logo.png" alt="Wendy's Studio Logo" className="logo" />
        <h1>Wendy's Studio</h1>
      </div>
    </header>
  );
};

export default Header;
