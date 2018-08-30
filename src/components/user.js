import React, { Component } from 'react'
import API from '../api'

export default class user extends Component {
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
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Nick</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.usuarios.map(usuario =>
                            <tr key={usuario.id}>
                                <th scope="row">{usuario.id}</th>
                                <td>{usuario.name}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.email}</td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
