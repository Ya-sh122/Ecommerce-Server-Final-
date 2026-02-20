const express  = require('express');
const app = express();

const userRoutes = require('./route/userRoutes');
const productRoutes = require('./route/productRoutes');
const cartRoutes = require('./route/cartRoutes');

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

app.listen(3000,()=>{console.log('Server is running at 3000 bro..')})


