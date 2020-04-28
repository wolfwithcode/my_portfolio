//Import libraries
import React from 'react';
import './App.css';

import {Switch, Route, BrowserRouter} from 'react-router-dom';

//Import components
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ThankyouPage from './pages/thankyou_page/thankyou_page.component';
import ErrorPage from './pages/error_page/error_page.component';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div id="home"></div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/thankyou' component={ThankyouPage} />
            <Route exact path='/error' component={ErrorPage} />
          </Switch>
      </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
