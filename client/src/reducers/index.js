// Reducers specify how application changes happen!!
import { combineReducers } from "redux";

import books from "./booksReducer";
import apiCallsInProgress from "./apiStatusReducer";

export default combineReducers({
  books,
  apiCallsInProgress,
});
