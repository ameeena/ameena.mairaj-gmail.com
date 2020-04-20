import axios from "axios";

import { handleResponse, handleError } from "./apiUtils";
// TODO:Put the URL in a config file
const baseUrl = "http://localhost:4500/api/books/";

// API call to get all the list of professions
export function getAllBooks() {
  return axios.get(baseUrl).then(handleResponse).catch(handleError);
}
