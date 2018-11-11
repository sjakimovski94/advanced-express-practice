let mongoose = require("mongoose");
//i want to code the definition of what a vehicle looks like
const schema = new mongoose.Schema({
  make: {
   type: String
 },
 model: {
    type: String
  },
 mileage:{
   type: Number
 },
 year:{
   type: Number
 },
 isCPO:{
   type: Boolean
 },
 isActive:{
   type: Boolean
 }
});

//will always lowercase and look for plural

module.exports =  mongoose.model("Vehicle", schema);
