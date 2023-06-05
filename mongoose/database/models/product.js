const mongoose = require('mongoose');
// create the product schema
var productSchema = new mongoose.Schema({
    product_name: {
        type: String
    },
    price: {
        type: Number
    },
    product_image: {
        type: String
    },
    description: {
        type: String
    },
    tags: [
        {
            type: String
        }
    ],
    images: [
        {
            type: String
        }
    ],
    quantity: {
        type: Number
    }, 
    user: {
        type: Object
    }
});

const product = mongoose.model('Product', productSchema, "products");

module.exports = product;