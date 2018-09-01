import React, { Component } from 'react'
import API from '../api'
import { Link } from "react-router-dom";

export default class usuario extends Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.getUsuarios();
    }

    getUsuarios = () => {
        API.get('/users').then(resp => {
            const usuarios = resp.data;
            this.setState({ usuarios })
        })
    }
    render() {
        return (
            <div className="container">
                <br />
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Usuários</li>
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
                        {this.state.usuarios.map(usuario =>
                            <tr key={usuario.id}>
                                <th scope="row">{usuario.id}</th>
                                <td>{usuario.name}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.email}</td>
                                <td><Link to={`/usuario/${usuario.id}`} className="btn btn-dark">Detalhe</Link></td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
