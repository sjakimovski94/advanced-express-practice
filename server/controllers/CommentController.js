let comments = require("../comments");

module.exports.list =  function list(request, response) {
    //return response.json([]);
    return response.json(comments);
   }
   module.exports.show =  function show(request, response) {
    //return response.json({theId: request.params.id});
    let comment = comments.find((u)=> u._id == request.params.id);
    return response.json(comment);
   }
   module.exports.create =  function create(request, response) {
    //return response.json({});
    request.body._id = comments.length+1;
    request.body.postId = 1;
    comments.push(request.body);
    return response.json(comments);
   }
   module.exports.update =  function update(request, response) {
    //return response.json({theId: request.params.id});
    let updateComment = comments.find((comment)=> comment._id == request.params.id);

    updateComment.likes = 1;

    return response.json(comments);
   }
   module.exports.remove =  function remove(request, response) {
    //return response.json({});
    let deleteComment = comments.find((comment)=> comment._id == request.params.id);

    deleteComment.isActive= false;

    return response.json(comments);
   }
   