const libraryController = require("../controllers/library-controller");

module.exports = function (app) {
  app.get("/api/books", libraryController.getBooks);
};
