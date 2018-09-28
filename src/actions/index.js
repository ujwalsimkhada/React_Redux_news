import { NEWS_IS_FETCHING, NEWS_HAS_ERROR, NEWS_FETCH_SUCCESS } from "./types";
import axios from "axios";

export function newsIsFetching(bool) {
    return {
        type: NEWS_IS_FETCHING,
        isFetching: bool
    };
}
export function newsHasError(bool) {
    return {
        type: NEWS_HAS_ERROR,
        hasError: bool
    };
}

export function newsFetchSuccess(news) {
    return {
        type: NEWS_FETCH_SUCCESS,
        news
    };
}

export function fetchNews(url) {
    return dispatch => {
        dispatch(newsIsFetching(true));

        axios
            .get(url)
            .then(response => {
                dispatch(newsIsFetching(false));
                dispatch(newsFetchSuccess(response.data.articles));
            })
            // .then(response => {
            //     dispatch(newsFetchSuccess(response.data));
            // })
            .catch(err => {
                dispatch(newsIsFetching(false));
                dispatch(newsHasError(true));
            });
    };
}
