import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMovies } from '../../actions/searchActions';

import MovieCard from './MovieCard';

export class MoviesContainer extends Component {

    componentDidMount(){
        this.props.fetchMovies();
    }

    render() {
        const { movies } = this.props;
        return (
            <div className="row">
                {movies && movies.length ?
                    movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
                    :
                    <div className="card col-md-12 mt-5">
                        <div className="card-body text-center">No records</div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
});

export default connect(
    mapStateToProps,
    { fetchMovies }
)(MoviesContainer);
