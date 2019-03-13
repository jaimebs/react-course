import React, { useState, useEffect } from 'react';
import { usuarioService } from './usuarioService';
import { Link } from 'react-router-dom';

export default function usuario() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    let usuarios = await usuarioService.get();
    setUsuarios(usuarios.data);
  };

  return (
    <div className="container">
      <br />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Usuários
          </li>
        </ol>
      </nav>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th className="col-col-md-1">#</th>
            <th className="col-col-md-6">Nome</th>
            <th className="col-col-md-1">Nick</th>
            <th className="col-col-md-3">Email</th>
            <th className="col-col-md-1">Ação</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <th scope="row">{usuario.id}</th>
              <td>{usuario.name}</td>
              <td>{usuario.username}</td>
              <td>{usuario.email}</td>
              <td>
                <Link to={`/usuario/${usuario.id}`} className="btn btn-dark">
                  Detalhe
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
