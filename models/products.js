const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    type: String,
    subtype: String,
    name: String,
    image: String,
    price: String,
    description: String
});

module.exports = mongoose.model("products", productsSchema);