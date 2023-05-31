//import express from 'express';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const messages = require('./models/messages');
const product = require('./models/product');
const rating = require('./models/ratings');
const { clearConfigCache } = require('prettier');


const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
let idNUM = 2;

  const uri = 'mongodb://' + PORT;

app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});


app.get('/', (req, res) => res.send('Endpoint created'));


app.get('/products', async (req, res) => {
    try {

        const regex = new RegExp(req.query.searchTerm, 'gmi');
        console.log(req.query.searchTerm)
        const products = await product.find({
            $or: [
                { product_name: regex},
                { description: regex}
            ]
        });
        console.log(products); // Log the products
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/products', async (req, res) => {
    try {
        const newProduct = {
            product_name: req.body.product_name,
            price: req.body.price,
            description: req.body.description,
            quantity: req.body.quantity,
            product_image: req.body.product_image,
        };

        console.log(newProduct);
        const createdProduct = await product.create(newProduct);
        res.send(createdProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// app.get('/products/:id', async (req, res) => {
//     try {
//         const newProduct = products.find(p => p.id === parseInt(req.params.id))
//         res.json(newProduct);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// })


app.get('/products/productInfo', async (req, res) => {
    try {
        const productId = req.query.searchTerm;
        console.log(productId);
        const productfound = await product.findById(productId); // Assuming your model is named 'Product'
        
        if (!productfound) {
            // Handle case when the product is not found
            return res.status(404).json({ error: 'Product not found' });
        }
        
        console.log(productfound); // Log the product
        res.json(productfound);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//get userRouts
const users = require('./api/UserRoutes');
const { faDatabase } = require('@fortawesome/free-solid-svg-icons');
app.use('/api/users', users)
