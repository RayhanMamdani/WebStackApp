const mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({

    name: {
        type: String
    },
    age: {
        type: Number
    },
    address: {
        type: String
    },
    isUser: {
        type: Boolean
    },
    isBusiness: {
        type: Boolean
    },
    isAdmin: {
        type: Boolean
    },
    profile_picture: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    products: {
        type: Array
    },
    messages: {
        type: Array
    }
});

const users = mongoose.model('users', usersSchema, "users");

module.exports = users;