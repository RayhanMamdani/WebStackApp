const mongoose = require('mongoose');

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
    }
});

const product = mongoose.model('Product', productSchema);

module.exports = product;