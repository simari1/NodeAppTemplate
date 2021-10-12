const express = require("express");
const path = require("path");
const accesslogger = require("./lib/log/accesslogger");
const systemlogger = require("./lib/log/systemlogger");

const app = express();
const port = 3000;
const router = require("./routes/router");

app.use(express.static("public"));
app.use("/src", express.static(`${__dirname}/src`));
app.set("view engine", "ejs");

app.use(accesslogger());
app.use("/", router);
app.use(systemlogger());

app.listen(port);
