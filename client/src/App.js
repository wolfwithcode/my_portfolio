//Import libraries
import React from 'react';
import './App.css';

import {Switch, Route, BrowserRouter} from 'react-router-dom';

//Import components
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
      </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
