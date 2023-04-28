const mongoose = require('mongoose');

var messagesSchema = new mongoose.Schema({
    init_id: {
        //type: Schema.Types.ObjectId
    },
    recieve_id: {
        //type: Schema.Types.ObjectId
    },
    message_content: {
        type: String
    },
    message_date: {
        type: String
    }
});

const messages = mongoose.model('messages', messagesSchema);

module.exports = messages;