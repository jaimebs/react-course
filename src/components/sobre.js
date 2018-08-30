import React, { Component } from 'react'
import API from '../api'

export default class sobre extends Component {
    state = {
        comentarios: []
    }

    componentDidMount() {
        this.getComentarios();
    }

    getComentarios = () => {
        API.get('/comments').then(resp => {
            const comentarios = resp.data;
            this.setState({ comentarios })
        })
    }

    render() {
        return (
            <div className="container">
                <br />
                {this.state.comentarios.map(comentario =>
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
                )
                }
            </div>
        )
    }
}
