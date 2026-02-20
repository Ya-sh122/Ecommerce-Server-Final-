const express = require('express');
const routes = express.Router();



routes.get('/:userId', (req,res)=>{
    res.send(`Fetching cart for user with ID: ${req.params.userId}`);
})

routes.post('/:userId', (req,res)=>{
    res.send(`Adding product to cart for user with ID: ${req.params.userId}`);
})



module.exports = routes;


