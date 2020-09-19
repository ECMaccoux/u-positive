const express = require("express");
const path = require("path");
const PATH = path.join(__dirname, "../dev/");
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const apiRouter = require("./api/api");
const loginRouter = require("./login");
const register = require("./register");

passport.use(
  new LocalStrategy(function (username, password, done) {
    //run function to identify user
  })
);

const App = express();

App.use(express.json());
App.use("/api", apiRouter);

App.use(
  "/login",
  passport.authenticate("local", function (req, res) {
    res.redirect("/home");
  })
);

App.get("/register", (req, res) => {
  res.sendFile(PATH + "index.html");
});

App.post("/register", (req, res) => {
  if (req.body.password1 != req.body.password2) {
    res.status(400);
  } else {
      req.body.password = req.body.password1
    register.createAccount(req.body).then((result) => {
      if (result[0]) {
        res.json(result[0]).status(201);
      }
    });
  }
});

App.get("/", (req, res) => {
  //console.log(CURR_PATH + '/img/' + req.params[0])
  res.sendFile(PATH + "index.html");
});

App.get("/*?", (req, res) => {
  //console.log(CURR_PATH + '/img/' + req.params[0])
  res.sendFile(PATH + req.params[0]);
});

const dashboardRouter = express.Router();

App.use(
    "/dashboard",
    dashboardRouter
);

dashboardRouter.get("/*?", (req, res) => {
    //console.log(CURR_PATH + '/img/' + req.params[0])
    res.sendFile(PATH + "index.html");
  });

App.listen(3000, () => {
  console.log("Running on port 3000!");
});
