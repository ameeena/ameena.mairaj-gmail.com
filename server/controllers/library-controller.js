var request = require("request");
const xml2js = require("xml2js");

exports.getBooks = (req, res) => {
  var params = {
    key: process.env.GOODREADS_DEV_KEY,
    v: process.env.GOODREADS_VERSION,
    per_page: process.env.PER_PAGE,
  };
  // shelf: "currently-reading",

  const userId = process.env.GOODREADS_USER_ID;
  console.log(params, userId);

  request(
    {
      url: `https://www.goodreads.com/review/list/${userId}.xml`,
      qs: params,
    },
    function (err, response) {
      if (err) {
        console.log(err);
        return;
      }
      xml2js.parseString(response.body, (err, result) => {
        let books = result["GoodreadsResponse"]["reviews"][0]["review"];
        // let index = Math.floor(Math.random() * books.length);
        // let title = books[index]['book'][0]['title'][0];
        return res.send(books);
      });
    }
  );
};
