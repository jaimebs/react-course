import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Home from './components//home/home';
import Usuario from './components/usuario/usuario';
import UsuarioForm from './components/usuario/usuario-form';
import Comentario from './components/comentario/comentario';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar titulo="Project" />
          <Route exact path="/" component={Home} />
          <Route exact path="/usuario" component={Usuario} />
          <Route path="/usuario/:id" component={UsuarioForm} />
          <Route path="/comentario" component={Comentario} />
        </div>
      </Router>
    );
  }
}

export default App;
