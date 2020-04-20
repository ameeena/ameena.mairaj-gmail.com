const configureExpress = require("./config/express-config");
const { development } = require("./config");

const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

const app = configureExpress();

const hostname = development.url;
const port = development.port;

app.listen(port, hostname, () => {
  console.log("Server Listening at port  : ", port);
});

module.exports = app;
