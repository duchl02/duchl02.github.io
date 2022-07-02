const express = require("express");
import ConfigViewEngine from "./configs/ViewEngine";
import initWebRoute from "./router/web";
// import connection from "./configs/connectDB"
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
ConfigViewEngine(app);
initWebRoute(app);
let date = new Date();
let hours= date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
app.listen(port, () => {
  console.log("listening on port",hours,minutes,seconds);
});
