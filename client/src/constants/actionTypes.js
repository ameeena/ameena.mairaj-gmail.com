import keyMirror from "keymirror";

export var ActionTypes = keyMirror({
  // API requests actions
  BEGIN_API_CALL: null,
  API_CALL_ERROR: null,
  REQUEST_ALL_BOOKS_SUCCESS: null,
});

console.log("ActionTypes", ActionTypes);
