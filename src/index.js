require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");
const config = require("./setting/config");
const Knex = require("knex");
const { Model } = require("objection");
const middleware = require("./middleware");
const path = require("path");
const SocketIOServer = require("./services/socketio");

// const session = require('express-session');
// const passport = require('passport')

//Session middleware (For 3rd party login, socketIO, ...)
// app.use(session({
//     secret: "shhhhhhh",
//     resave: false,
//     saveUninitialized: true,
// }))
// app.use(passport.initialize())
// app.use(passport.session())

//Connect database
const knex = Knex(config.databaseConfig);
const connect = () => {
  knex
    .raw("select 1+11 as result")
    .then((data) => {
      console.log("📁 Database connected!");
      knex.migrate
        .latest()
        .then(function (res) {
          console.log("⛵ migration accomplished!");
        })
        .catch((e) => console.log(e));
    })
    .catch((error) => {
      console.log("🚫 Database connection error retrying connect");
      setTimeout(() => {
        connect();
      }, 4000);
    });
};
connect();
Model.knex(knex);

app.use(morgan("tiny"));
app.use(cors());
//Body-parser middleware
app.use(
  express.urlencoded({
    extended: true,
  })
); //Form submit HTML
app.use(express.json()); //For fetch, XMLRequest, axios,....

app.use("/static", express.static(path.join(__dirname, "..", "public")));

app.use(middleware.checkin);

app.get("/", function (req, res) {
  res.status(200).json("Welcome");
});
app.use(routes);

server.listen(process.env.SERVER_PORT || 5000, () => {
  console.log("⚡ Enviroment:", process.env.NODE_ENV);
  console.log(
    `🚀 Server ready at http://localhost:${process.env.SERVER_PORT || 5000}`
  );
});

SocketIOServer.start(server);
