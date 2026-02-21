const express = require('express');
const routes = express.Router();
const productController = require('../controller/productcontrol')


//Fetch all products
routes.get('/', productController.getProducts);


routes.get('/:id',productController.getProductsByID );


routes.post('/', productController.addProduct);




module.exports = routes;


