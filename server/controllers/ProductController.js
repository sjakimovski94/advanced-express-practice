let products = require("../products");
let ProductModel = require("../models/ProductModel")

module.exports.list =  function list(request, response) {
    //return response.json([]);
    ProductModel.find().exec().then(products=>{
        // return response.json(vehicles)
        return response.json(products);
       })
   }
   module.exports.show =  function show(request, response) {
    //return response.json({theId: request.params.id});
    ProductModel.findById(request.params.id).exec()
    .then(product=>{
      return response.json(product);
    })
    //let product = products.find((u)=> u._id == request.params.id);
   }
   module.exports.create =  function create(request, response) {
    //return response.json({});
    //request.body._id = products.length+1;
    //request.body.postId = 1;
    //products.push(request.body);
    let product = new ProductModel(request.body)
    product.save();
    return response.json(products);
   }
   module.exports.update =  function update(request, response) {
    //return response.json({theId: request.params.id});
    ProductModel.findById(request.params.id).exec()
    .then(product=>{
      product.inStock=true;
      product.save();
      return response.json(product);
    })
    //let updateProduct = products.find((product)=> product._id == request.params.id);
    //updateProduct.inStock = true;
    //return response.json(products);
   }
   module.exports.remove =  function remove(request, response) {
    //return response.json({});
    ProductModel.findById(request.params.id).exec()
    .then(product=>{
      product.isActive=false;
      product.save();
      return response.json(product);
    })
    //let deleteProduct = products.find((product)=> product._id == request.params.id);
    //deleteProduct.isActive= false;
    //return response.json(products);
   }
   