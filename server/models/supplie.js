const mongoose = require('mongoose');
const { Schema } = mongoose;

const SuppliesSchema  = new Schema({
    name: {type: String, required: true},
    brand: {type: String, require: true},
    quantity: {type: Number, required: true},
});

module.exports = mongoose.model('UseSupplier', SuppliesSchema);
