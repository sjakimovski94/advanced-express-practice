let express = require("express");
let bodyParser = require("body-parser");

let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://s.jakimovski94:m4k3d0n3c@ds053828.mlab.com:53828/express-practice");


const app = express();
app.use(express.static('public'))
app.use(bodyParser.json());


let ContactRoutes  = require("./routes/ContactRoutes");
let CommentRoutes  = require("./routes/CommentRoutes");
let ProductRoutes  = require("./routes/ProductRoutes");
let VehicleRoutes  = require("./routes/VehicleRoutes");

app.use(ContactRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);
app.use(VehicleRoutes);

//default
app.use((req,res)=>{
    return res.json("Not found! 404")
});



app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
})

