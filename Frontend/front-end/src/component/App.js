import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import RouterURL from '../router/RouterURL';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <RouterURL/>
      </div>
    </Router>
  );
}

export default App;
