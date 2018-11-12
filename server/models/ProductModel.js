let mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name: {
     type: String
   },
   description: {
      type: String
    },
   reviews:{
     type: Number
   },
   rating:{
     type: Number
   },
   imgUrl: {
    type: String
  },
  price: {
     type: Number
   },
   category: {
    type: String
  },
   inStock:{
    type: Boolean
   },
   isActive:{
     type: Boolean
   }
  });

//will always lowercase and look for plural

module.exports =  mongoose.model("Product", schema);
