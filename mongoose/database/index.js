//import express from 'express';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const messages = require('./models/messages');
const product = require('./models/product');
const rating = require('./models/ratings');
const { clearConfigCache } = require('prettier');
//const mod = require('models')

const app = express();
const PORT = process.env.PORT || 3000;

let idNUM = 2;

// let products = [
//     {
//         id: 1,
//         product_name: 'test',
//         price: 49.99,
//         description: 'This is a test',
//         quantity: 2
//     }
// ];


app.use(cors());
app.use(bodyParser.json());
console.log(PORT)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});


app.get('/', (req, res) => res.send('Endpoint created'));


app.get('/products', async (req, res) => {
    try {
        const products = await product.find({});
        res.json(products)
    } catch (err) {
        res.status(500).json({ error: err.message }); 
    }
});

app.post('/products', async (req, res) => {
    try {
        console.log(123)
        const newProduct = {
            productId: idNUM++,
            product_name: req.body.product_name,
            price: req.body.price,
            description: req.body.description,
            quantity: req.body.quantity
        }
        console.log(newProduct)
        const productTest = await product.create(newProduct)
        res.send(productTest)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.get('/products/:id', async (req, res) => {
    console.log('testy westy')
    try {
        const newProduct = products.find(p => p.id === parseInt(req.params.id))
        res.json(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})