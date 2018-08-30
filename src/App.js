import React, { Component } from 'react';
import Navbar from './components/navbar'
import Home from './components/home'
import User from './components/user'
import Comentario from './components/comentario'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar titulo="Project" />
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/comentario" component={Comentario} />
        </div>
      </Router>
    );
  }
}

export default App;
