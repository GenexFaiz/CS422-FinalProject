import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import RouterURL from '../router/RouterURL';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Nav/>
        <RouterURL/>
        <Footer/>
    </Router>
  );
}

export default App;
