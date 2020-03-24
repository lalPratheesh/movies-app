import { SEARCH_MOVIE, FETCH_MOVIES } from './types';

import content1 from '../data/API/CONTENTLISTINGPAGE-PAGE1.json';
import content2 from '../data/API/CONTENTLISTINGPAGE-PAGE2.json';
import content3 from '../data/API/CONTENTLISTINGPAGE-PAGE3.json';

export const searchMovie = (text) => (dispatch) => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
}

export const fetchMovies = (text) => (dispatch) => {
    let payload = [
        ...content1.page['content-items'].content,
        ...content2.page['content-items'].content,
        ...content3.page['content-items'].content
    ];
    if (text && text !== '') {
        payload = payload.filter(item => item.name.search(new RegExp(text, 'i')) !== -1);
    }

    dispatch({
        type: FETCH_MOVIES,
        payload
    });
}