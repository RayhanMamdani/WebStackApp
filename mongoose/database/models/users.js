const mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
    _id: {
        //type: Schema.Types.ObjectId
    },
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
    products: [
        {
            type: String
        }
    ]
});

const users = mongoose.model('users', usersSchema, "users");

module.exports = users;