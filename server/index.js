let express = require("express");
let bodyParser = require("body-parser");


const app = express();
app.use(express.static('public'))
app.use(bodyParser.json());


let ContactRoutes  = require("./routes/ContactRoutes");

app.use(ContactRoutes);

let CommentRoutes  = require("./routes/CommentRoutes");

app.use(CommentRoutes);

let ProductRoutes  = require("./routes/ProductRoutes");

app.use(ProductRoutes);

let VehicleRoutes  = require("./routes/VehicleRoutes");

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

