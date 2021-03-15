module.exports = app => {
  const vehicles = require("../controllers/vehicle.controller.js");

  app.post("/vehicles", vehicles.create);

  app.get("/vehicles", vehicles.findAll);
};