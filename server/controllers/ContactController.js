let contacts = require("../contacts");
let ContactModel = require("../models/ContactModel")

module.exports.list =  function list(request, response) {
    //return response.json([]);
    ContactModel.find().exec().then(contacts=>{
        // return response.json(vehicles)
        return response.json(contacts);
       })
   }
   module.exports.show =  function show(request, response) {
    //return response.json({theId: request.params.id});
    ContactModel.findById(request.params.id).exec()
    .then(contact=>{
      return response.json(contact);
    })
    //let contact = contacts.find((u)=> u._id == request.params.id);
   }
   module.exports.create =  function create(request, response) {
    //return response.json({});
    //request.body._id = contacts.length+1;
    //request.body.postId = 1;
    //contacts.push(request.body);
    let contact = new ContactModel(request.body)
    contact.save();
    return response.json(contacts);
   }
   
   module.exports.update =  function update(request, response) {
    //return response.json({theId: request.params.id});
    ContactModel.findById(request.params.id).exec()
    .then(contact=>{
      contact.accountValidated=true;
      contact.save();
      return response.json(contact);
    })
    //let updateContact = contacts.find((contact)=> contact._id == request.params.id);
    //updateContact.superPowered= true;
    //return response.json(contacts);
   }
   module.exports.remove =  function remove(request, response) {
    //return response.json({});
    ContactModel.findById(request.params.id).exec()
    .then(contact=>{
      contact.isActive=false;
      contact.save();
      return response.json(contact);
    })
    //let deleteContact = contacts.find((contact)=> contact._id == request.params.id);
    //deleteContact.isActive= false;
    //return response.json(contacts);
   }
   