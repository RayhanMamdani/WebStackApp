const mongoose = require('mongoose');

var ratingsSchema = new mongoose.Schema({
    rating: {
        type: Number
    },
    userID: {
        //type: Schema.Types.ObjectId
    },
    ratingComment: {
        type: String
    }
});

const ratings = mongoose.model('ratings', ratingsSchema);

module.exports = ratings;