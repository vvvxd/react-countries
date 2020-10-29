import React from 'react';
import {Route} from 'react-router-dom'

import Header from './components/Header';
import CountryPage from './pages/CountryPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Header />
      <Route path="/" component={MainPage} exact />
      <Route path="/country" component={CountryPage} exact />
    </>
  );
}

export default App;
