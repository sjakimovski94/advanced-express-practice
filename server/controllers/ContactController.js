let contacts = require("../contacts");

module.exports.list =  function list(request, response) {
    //return response.json([]);
    return response.json(contacts);
   }
   module.exports.show =  function show(request, response) {
    //return response.json({theId: request.params.id});
    let contact = contacts.find((u)=> u._id == request.params.id);
    return response.json(contact);
   }
   module.exports.create =  function create(request, response) {
    //return response.json({});
    request.body._id = contacts.length+1;
    request.body.postId = 1;
    contacts.push(request.body);
    return response.json(contacts);
   }
   module.exports.update =  function update(request, response) {
    //return response.json({theId: request.params.id});
    let updateContact = contacts.find((contact)=> contact._id == request.params.id);

    updateContact.superPowered= true;

    return response.json(contacts);
   }
   module.exports.remove =  function remove(request, response) {
    //return response.json({});
    let deleteContact = contacts.find((contact)=> contact._id == request.params.id);

    deleteContact.isActive= false;

    return response.json(contacts);
   }
   