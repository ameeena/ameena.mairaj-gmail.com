// Action Creators create a export function that will return state and action
// API calls are also handled from here
import { ActionTypes as actions } from "../constants/actionTypes";
import * as booksApi from "../api/bookApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

//Action Creators

export function getAllBooksSuccess(result) {
  return { type: actions.REQUEST_ALL_BOOKS_SUCCESS, data: result };
}
//--

export function getAllBooks() {
  return async (dispatch) => {
    try {
      dispatch(beginApiCall());
      const books = await booksApi.getAllBooks();
      dispatch(getAllBooksSuccess(books));
    } catch (error) {
      dispatch(apiCallError());
      throw error;
    }
  };
}

//--
