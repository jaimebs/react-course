import React, { Component } from 'react'
import API from '../api'

export default class usuarioform extends Component {
    state = {
        usuario: {}
    }

    componentDidMount() {
        this.getUsuario();
    }

    getUsuario = () => {
        API.get(`/users/${this.props.match.params.id}`).then(resp => {
            const usuario = resp.data;
            this.setState({ usuario })
        })
    }
    render() {
        return (
            <div className="container">
                <br />
                <h1>Usuário - {this.state.usuario.name} - {this.state.usuario.website}</h1>
                <button className="btn btn-info" onClick={()=>this.props.history.goBack()}>Voltar</button>
            </div>
        )
    }
}
