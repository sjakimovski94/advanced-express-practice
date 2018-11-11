let mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name: {
     type: String
   },
   occupation: {
      type: String
    },
   avatar:{
     type: String
   },
   accountValidated:{
     type: Boolean
   },
   isActive:{
     type: Boolean
   }
  });

//will always lowercase and look for plural

module.exports =  mongoose.model("Contact", schema);
