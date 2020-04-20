import initialState from "./initialState";
import { ActionTypes as types } from "../constants/actionTypes";

function booksReducer(state = initialState.books, action) {
  switch (action.type) {
    case types.REQUEST_ALL_BOOKS_SUCCESS:
      return action.data.data;
    default:
      return state;
  }
}
export default booksReducer;
