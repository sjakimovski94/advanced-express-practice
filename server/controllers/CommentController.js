let comments = require("../comments");
let CommentModel = require("../models/CommentModel")

module.exports.list =  function list(request, response) {
    //return response.json([]);
    CommentModel.find().exec().then(comments=>{
        // return response.json(vehicles)
        return response.json(comments);
       })
   }
   module.exports.show =  function show(request, response) {
    //return response.json({theId: request.params.id});
    CommentModel.findById(request.params.id).exec()
    .then(comment=>{
      return response.json(comment);
    })
    //let comment = comments.find((u)=> u._id == request.params.id);
   }
   module.exports.create =  function create(request, response) {
    //return response.json({});
    //request.body._id = comments.length+1;
    //request.body.postId = 1;
    //comments.push(request.body);
    let comment = new CommentModel(request.body)
    comment.save();
    return response.json(comments);
   }
   module.exports.update =  function update(request, response) {
    //return response.json({theId: request.params.id});
    CommentModel.findById(request.params.id).exec()
    .then(comment=>{
      comment.likes=1;
      comment.save();
      return response.json(comment);
    })
    //let updateComment = comments.find((comment)=> comment._id == request.params.id)
    //updateComment.likes = 1;
    //return response.json(comments);
   }
   module.exports.remove =  function remove(request, response) {
    //return response.json({});
    CommentModel.findById(request.params.id).exec()
    .then(comment=>{
      comment.isActive=false;
      comment.save();
      return response.json(comment);
    })
    //let deleteComment = comments.find((comment)=> comment._id == request.params.id);
    //deleteComment.isActive= false;
    //return response.json(comments);
   }
   