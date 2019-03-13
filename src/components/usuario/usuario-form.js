import React, { useState, useEffect } from 'react';
import { usuarioService } from './usuarioService';
import semFoto from '../../img/no-image-icon-4.png';

export default function usuarioform(props) {
  const [usuario, setusuario] = useState({});

  useEffect(() => {
    getUsuario();
  }, []);

  const getUsuario = async () => {
    const usuario = await usuarioService.getById(props.match.params.id);
    setusuario(usuario.data);
  };

  return (
    <div className="container">
      <br />
      <div className="media">
        <img src={semFoto} className="mr-3" alt={'...'} style={{ width: 50, height: 50 }} />
        <div className="media-body">
          <h5 className="mt-0">{usuario.name}</h5>
          {usuario.website}
        </div>
      </div>
      <br />
      <button className="btn btn-info" onClick={() => props.history.goBack()}>
        Voltar
      </button>
    </div>
  );
}
