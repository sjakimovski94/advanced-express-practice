let products = require("../products");

module.exports.list =  function list(request, response) {
    //return response.json([]);
    return response.json(products);
   }
   module.exports.show =  function show(request, response) {
    //return response.json({theId: request.params.id});
    let product = products.find((u)=> u._id == request.params.id);
    return response.json(product);
   }
   module.exports.create =  function create(request, response) {
    //return response.json({});
    request.body._id = products.length+1;
    request.body.postId = 1;
    products.push(request.body);
    return response.json(products);
   }
   module.exports.update =  function update(request, response) {
    //return response.json({theId: request.params.id});
    let updateProduct = products.find((product)=> product._id == request.params.id);

    updateProduct.inStock = true;

    return response.json(products);
   }
   module.exports.remove =  function remove(request, response) {
    //return response.json({});
    let deleteProduct = products.find((product)=> product._id == request.params.id);

    deleteProduct.isActive= false;

    return response.json(products);
   }
   