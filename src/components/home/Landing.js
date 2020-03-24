import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';
import MoviesContainer from './MoviesContainer';

export class Landing extends Component {
    render() {
        const {loading} = this.props;
        return (
            <div className="container">
                {loading ? <Spinner /> : <MoviesContainer />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
});

export default connect(
    mapStateToProps,
    {}
)(Landing);
