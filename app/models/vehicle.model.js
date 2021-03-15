const sql = require("./db.js");

const Vehicle = function(vehicle) {
  this.id = vehicle.id
  this.model = vehicle.model
  this.brand = vehicle.brand
  this.color = vehicle.color
  this.plate = vehicle.plate
  this.value = vehicle.value
};

Vehicle.create = (newVehicle, result) => {
  sql.query("INSERT INTO vehicle SET ?", newVehicle, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created vehicle: ", { id: res.insertId, ...newVehicle });
    result(null, { id: res.insertId, ...newVehicle });
  });
};

Vehicle.getAll = result => {
  sql.query("SELECT * FROM vehicle", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("vehicles: ", res);
    result(null, res);
  });
};

module.exports = Vehicle;
