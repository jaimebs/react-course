import React, { useState, useEffect } from 'react';
import { comentarioService } from './comentarioService';

export default function comentario() {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    getComentarios();
  }, []);

  const getComentarios = async () => {
    const comentarios = await comentarioService.get();
    setComentarios(comentarios.data);
  };

  return (
    <div className="container">
      <br />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Comentários
          </li>
        </ol>
      </nav>
      {comentarios.map(comentario => (
        <div key={comentario.id}>
          <div className="card">
            <h5 className="card-header">{comentario.email}</h5>
            <div className="card-body">
              <h5 className="card-title">{comentario.name}</h5>
              <p className="card-text">{comentario.body}</p>
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}
