const mongoose = require('mongoose');

var messagesSchema = new mongoose.Schema({
    idOne: {
        //type: Schema.Types.ObjectId
    },
    idTwo: {
        //type: Schema.Types.ObjectId
    },
    message_content: {
        type: Array
    },
    message_date: {
        type: String
    }
});

const messages = mongoose.model('messages', messagesSchema);

module.exports = messages;