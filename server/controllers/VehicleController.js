let vehicles = require("../vehicles");
let VehicleModel = require("../models/VehicleModel")

module.exports.list =  function list(request, response) {
    //return response.json([]);
    VehicleModel.find().exec().then(vehicles=>{
    // return response.json(vehicles)
    return response.json(vehicles);
   })
}
   module.exports.show =  function show(request, response) {
    //return response.json({theId: request.params.id});
    VehicleModel.findById(request.params.id).exec()
      .then(vehicle=>{
        return response.json(vehicle);
      })
    //let vehicle = vehicles.find((u)=> u._id == request.params.id);

   }
   module.exports.create =  function create(request, response) {
    //return response.json({});
    let vehicle = new VehicleModel(request.body)
    vehicle.save();
    //request.body._id = vehicles.length+1;
    //request.body.postId = 1;
    //vehicles.push(request.body);
    return response.json(vehicles);
   }
   module.exports.update =  function update(request, response) {
    //return response.json({theId: request.params.id});
    VehicleModel.findById(request.params.id).exec()
    .then(vehicle=>{
      vehicle.isCPO=true;
      vehicle.save();
      return response.json(vehicle);
    })
    //let updateVehicle = vehicles.find((vehicle)=> vehicle._id == request.params.id);

    //updateVehicle.isCPO = true;

    //return response.json(vehicles);
   }
   module.exports.remove =  function remove(request, response) {
    //return response.json({});
    VehicleModel.findById(request.params.id).exec()
    .then(vehicle=>{
      vehicle.isActive=false;
      vehicle.save();
      return response.json(vehicle);
    })

    //let deleteVehicle = vehicles.find((vehicle)=> vehicle._id == request.params.id);

    //deleteVehicle.isActive= false;

    //return response.json(vehicles);
   }
   