let vehicles = require("../vehicles");

module.exports.list =  function list(request, response) {
    //return response.json([]);
    return response.json(vehicles);
   }
   module.exports.show =  function show(request, response) {
    //return response.json({theId: request.params.id});
    let vehicle = vehicles.find((u)=> u._id == request.params.id);
    return response.json(vehicle);
   }
   module.exports.create =  function create(request, response) {
    //return response.json({});
    request.body._id = vehicles.length+1;
    request.body.postId = 1;
    vehicles.push(request.body);
    return response.json(vehicles);
   }
   module.exports.update =  function update(request, response) {
    //return response.json({theId: request.params.id});
    let updateVehicle = vehicles.find((vehicle)=> vehicle._id == request.params.id);

    updateVehicle.isCPO = true;

    return response.json(vehicles);
   }
   module.exports.remove =  function remove(request, response) {
    //return response.json({});
    let deleteVehicle = vehicles.find((vehicle)=> vehicle._id == request.params.id);

    deleteVehicle.isActive= false;

    return response.json(vehicles);
   }
   