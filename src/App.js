import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Feed from './pages/Feed.js';
import Form from './pages/Form.js';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Feed' component={Feed}/>
          <Route path='/Form' component={Form}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;