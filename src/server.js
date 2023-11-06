const express = require("express");
const app = express();
const glopalError = require("./middlewares/Error");
const routes = require("./routes");
const dbConnection = require("./config/dbConnection");
const { ApiError } = require("./utils");
require("dotenv").config({
  path: "./src/.env/config.env",
});
// Data base connction
dbConnection();
// some usiful middlewers
app.use(express.json());
app.use(require("morgan")("dev"));
// routes

// TODO: enable this route under after create some services
app.use("/api", routes);

// handle all unused routes
app.all("*", (req, res, next) => {
  next(new ApiError(`can't find this route: ${req.originalUrl}`, 404));
});

// glopal error handling
app.use(glopalError);

// make our server run
const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`app runnig on ${process.env.BASE_URl}`);
});

process.on("unhandledRejection", (err) => {
  console.error(`unhandledRejection error :${err.name} ${err.message}`);
  server.close(() => {
    console.log(`shuting down...`);
    process.exit(1);
  });
});
