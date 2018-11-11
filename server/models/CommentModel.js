let mongoose = require("mongoose");
const schema = new mongoose.Schema({
    body: {
     type: String
   },
   postId: {
      type: Number
    },
   likes:{
     type: Number
   },
   isActive:{
     type: Boolean
   }
  });

//will always lowercase and look for plural

module.exports =  mongoose.model("Comment", schema);
