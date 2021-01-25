import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Calculator from './components/calculator';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Bracketed Tax Engine</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/calculator'} className="nav-link">Tax Calculator</Link>
                </li>
              </ul>
            </div>
          </nav>
          
          <Switch>
              <Route exact path='/' component={ Home } />
              <Route path='/calculator' component={ Calculator } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
