import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header__title">
        <span>Where in the world?</span>
      </div>
      <div className="header__change-theme">
        <i className="fas fa-moon"></i>
        <span>Change Theme</span>
      </div>
    </header>
  );
}

export default Header;
