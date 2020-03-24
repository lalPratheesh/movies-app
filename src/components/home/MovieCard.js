import React, { Component } from 'react'

export class MovieCard extends Component {
    render() {
        const { movie } = this.props;
        return (
            <div className="mt-5 mr-3">
                <div className="card text-center h-60" style={{ width: '16rem' }}>
                    <img className="card-img-top" src={`/Slices/${movie['poster-image']}`} alt="Movie Image" />
                    <div className="card-body">
                        <p className="card-text">{movie.name}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;
