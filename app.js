const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Express Session Middleware
app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true
}));

// connect flash
app.use(flash());

app.use(express.static("public"));

//ROUTES
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

const db = require("./models");

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, console.log("Server starting on port: " + PORT));
});
