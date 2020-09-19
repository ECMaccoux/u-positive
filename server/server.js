const express = require("express");
const path = require("path");
const PATH = path.join(__dirname, "../dev/");
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const apiRouter = require("./api/api");
const { findUserByID, findUserByEmail, validateUser } = require("./login");
const register = require("./register");
//const session = require("express-session");
const keys = require("../keys");
const cookieSession = require('cookie-session');
const { nextTick } = require("process");

const App = express();

passport.use(
  new LocalStrategy(function (username, password, done) {
    findUserByEmail(username)
      .then((result) => {
          //console.log(result[0])
        if (!result[0]) {
          return done(null, false);
        } else {
          validateUser(username, password)
          .then(success => {
            console.log('Validation of user: ' + success)
              if (success) {
                  //console.log(result[0])
                return done(null, result[0]);
              } else {
                  console.log('failed identity check')
                return done(null, false);
              }
          })
        }
      })
      .catch((err) => {
        done(err);
      });
  })
);

App.use(
    cookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: [keys.settings.ENCRYPTION]
    })
  );




passport.serializeUser(function (user, cb) {
    console.log(user)
  cb(null, user.userID);
});

passport.deserializeUser(function (id, cb) {
  findUserByID(id)
    .then((result) => {
        //onsole.log(result[0])
      cb(null, result[0]);
    })
    .catch((err) => {
      cb(err);
    });
});

App.use(passport.initialize());
App.use(passport.session());
App.use(express.json());


App.use("/api", apiRouter);


App.get("/login", (req, res) => {
    res.sendFile(PATH + "index.html");
  });

App.post(
  "/login",
  passport.authenticate("local"), function (req, res) {
    res.json(req.user)
  }
);


App.get("/register", (req, res) => {
  res.sendFile(PATH + "index.html");
});

App.post("/register", (req, res) => {
  if (req.body.password1 != req.body.password2) {
    res.status(400);
  } else {
    req.body.password = req.body.password1;
    register.createAccount(req.body).then((result) => {
      if (result[0]) {
        res.json(result[0]).status(201);
      }
    });
  }
});

App.get('/logout', function (req, res) {
    req.logOut()
    res.redirect('/')
    
})

App.get("/", (req, res) => {
  //console.log(CURR_PATH + '/img/' + req.params[0])
  res.sendFile(PATH + "index.html");
});

const dashboardRouter = express.Router();

App.use(
    "/dashboard",
    dashboardRouter
);

dashboardRouter.use((req, res, next) => {
    if(req.user) {
    next()
    } else {
        res.redirect('/login')
    }
})

dashboardRouter.get("/*?", (req, res) => {
    //console.log(CURR_PATH + '/img/' + req.params[0])
    res.sendFile(PATH + "index.html");
  });

App.get("/*?", (req, res) => {
  //console.log(CURR_PATH + '/img/' + req.params[0])
  res.sendFile(PATH + req.params[0]);
});




App.listen(3000, () => {
  console.log("Running on port 3000!");
});
