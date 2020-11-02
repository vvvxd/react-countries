import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTheme } from '../redux/actions/header';

function Header() {
  const dispatch = useDispatch();
  const activeTheme = useSelector(({ header }) => header.activeTheme);

  const changeTheme = () => {
    dispatch(setActiveTheme(activeTheme));
  };

  return (
    <header className="header">
      <div className="header__title">
        <span>Where in the world?</span>
      </div>
      <div className="header__change-theme">
        <i className="fas fa-moon"></i>
        <span onClick={changeTheme}>Change Theme</span>
      </div>
    </header>
  );
}

export default Header;
