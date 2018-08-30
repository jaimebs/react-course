import React, { Component } from 'react';
import Navbar from './components/navbar'
import Home from './components/home'
import Sobre from './components/sobre'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar titulo="Project" />
          <Route exact path="/" component={Home} />
          <Route path="/sobre" component={Sobre} />
        </div>
      </Router>
    );
  }
}

export default App;
