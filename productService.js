
//Business logic

const getAllProducts = ()=>{
    return 'Fetching all Products';
}

const addNewProduct = ()=>{
   return  'Adding a new product';
}

const getProductByID =(id)=>{
    return `Fetching product with ID: ${id}`;
}

module.exports={
    getAllProducts,
    addNewProduct,
    getProductByID
}