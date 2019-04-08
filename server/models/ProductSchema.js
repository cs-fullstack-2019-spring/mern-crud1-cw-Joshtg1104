var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    productID: Number,
    price: String,
    quantity: Number,
});

//Export model
module.exports = mongoose.model('Product', ProductSchema);