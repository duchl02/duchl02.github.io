import express from "express";
import homeController from '../controller/homeController'
let router = express.Router();

let initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/home", (req, res) => {
    res.send("<home>home</home>");
  });
  return app.use("/", router);
};

module.exports = initWebRoute;
