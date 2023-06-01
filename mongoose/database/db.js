const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://rmamdani:Password@webstackapplication-dat.zwkx8xl.mongodb.net/database?retryWrites=true&w=majority';


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
}).then(() => console.log('DB connected')).catch((err) => console.log(err))


module.exports = {
    key: "secret"
}