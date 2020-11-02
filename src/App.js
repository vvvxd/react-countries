import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import CountryPage from './pages/CountryPage';
import MainPage from './pages/MainPage';

function App() {
  const activeTheme = useSelector(({ header }) => header.activeTheme);
  return (
    <div className={activeTheme ? 'light' : 'dark'}>
      <Header />
      <Route path="/" component={MainPage} exact />
      <Route path="/country" component={CountryPage} exact />
    </div>
  );
}

export default App;
