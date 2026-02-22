
const productService = require('../services/productService');

//Get all product
const getProducts =(req,res)=>{
    const result = productService.getAllProducts();
    res.send(result);
}

const addingProduct=(req,res)=>{
    const result = productService.addNewProduct();
    res.send(result);
}

const getproductByID=(req,res)=>{
    let id = req.params.id;
    const result = productService.getProductByID(id);
    res.send(result);
}

module.exports={
    getProducts,
    addingProduct,
    getproductByID
}
