import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import CountryPage from './pages/CountryPage';
import MainPage from './pages/MainPage';

function App() {
  const activeTheme = useSelector(({ header }) => header.activeTheme);
  return (
    <div className={activeTheme ? 'light' : 'dark'}>
      <Header />
      <Switch>
        <Route path="/country" component={CountryPage}  />
        <Route path="/" component={MainPage}  />
      </Switch>
    </div>
  );
}

export default App;
