import React from 'react';
import { Link } from 'react-router-dom';

export default function navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          {props.titulo.toUpperCase()}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/usuario" className="nav-item nav-link">
              Usuário
            </Link>
            <Link to="/comentario" className="nav-item nav-link">
              Comentarios
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
