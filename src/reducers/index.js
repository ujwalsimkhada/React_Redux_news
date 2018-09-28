import { combineReducers } from "redux";

import { isFetching, hasError, news } from "./newsReducer";

export default combineReducers({
    isFetching,
    hasError,
    news
});
