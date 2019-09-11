const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientsSchema  = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, require: true},
    address: { type: String, require: true },
    phone: {type: Number, required: true},
    e_mail: { type: String, require: true },
});

module.exports = mongoose.model('Client', ClientsSchema);
