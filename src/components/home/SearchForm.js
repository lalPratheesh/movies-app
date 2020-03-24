import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchMovie, fetchMovies } from '../../actions/searchActions';

export class SearchForm extends Component {

    onChange = e => {
        this.props.searchMovie(e.target.value);
        if (!e.target.value[0] || e.target.value[0] === '') {
            this.props.fetchMovies();
        }
    }

    onSubmit = e => {
        e.preventDefault();
        if (!this.props.text || this.props.text === '') return false;
        this.props.fetchMovies(this.props.text);
    }

    render() {
        return (
            <div>
                <form className="form-inline" id="searchForm" onSubmit={this.onSubmit}>
                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        name="searchText"
                        onChange={this.onChange}
                        placeholder="Search"
                        aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

const mapStatesToProps = state => ({
    text: state.movies.text
});

export default connect(
    mapStatesToProps,
    {
        searchMovie,
        fetchMovies
    }
)(SearchForm);
