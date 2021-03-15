const Vehicle = require("../models/vehicle.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const vehicle = new Vehicle({
    model: req.body.model,
    brand: req.body.brand,
    color: req.body.color,
    plate: req.body.plate,
    value: req.body.value,
  });

  Vehicle.create(vehicle, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.status(201).send(data);
  });
};

exports.findAll = (req, res) => {
  Vehicle.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.status(200).send(data);
  });
};

exports.findOne = (req, res) => {
  
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};