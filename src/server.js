const express = require("express");
const app = express();
const glopalError = require("./middlewares/Error");
const routes = require("./routes");
const cors = require("cors");
const dbConnection = require("./config/dbConnection");
const { ApiError } = require("./utils");
const passport = require("passport");
require("dotenv").config({
  path: "./src/.env/config.env",
});
// Data base connction
dbConnection();
// some usiful middlewers
app.use(express.json());
app.use(require("morgan")("dev"));
app.use(require("cookie-parser")());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
passport.use(require("./config/passport"));
app.use(passport.initialize());

// routes

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
  console.log(`unhandledRejection Errors ${err.name} || ${err.message}`);
  server.close(() => {
    console.error(`Shtuing down...!`);
    process.exit(1);
  });
});
