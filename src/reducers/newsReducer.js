import { NEWS_IS_FETCHING, NEWS_HAS_ERROR, NEWS_FETCH_SUCCESS } from "../actions/types";

export function isFetching(state = false, action) {
    switch (action.type) {
        case NEWS_IS_FETCHING:
            return action.isFetching;
        default:
            return state;
    }
}
export function hasError(state = false, action) {
    switch (action.type) {
        case NEWS_HAS_ERROR:
            return action.hasError;
        default:
            return state;
    }
}
export function news(state = [], action) {
    switch (action.type) {
        case NEWS_FETCH_SUCCESS:
            return action.news;
        default:
            return state;
    }
}
