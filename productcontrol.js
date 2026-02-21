const getProducts =  (req,res)=>{
    res.send('Fetching all products..');
}

const getProductsByID = (req,res)=>{
    res.send(`Fetching product with ID: ${req.params.id}`);
}

const addProduct = (req,res)=>{
    res.send(`Adding new product in list`);
}

module.exports={
    getProducts,
    getProductsByID,
    addProduct
}