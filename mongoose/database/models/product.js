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
    userID: {
        //type: Schema.Types.ObjectId
    },
    productID: {
        //type: Schema.Types.ObjectId
    },
    quantity: {
        type: Number
    }
});

const product = mongoose.model('Product', productSchema);

module.exports = product;