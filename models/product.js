const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  uniq_id: { type: String, required: true },
  product_name: {
    type: String,
    required: true,
  },
  retail_price: Number,
  discounted_price: Number,
  image: Array,
  description: String,
  product_rating: String,
  overall_rationg: String,
  brand: String,
});

module.exports = mongoose.model("Product", productSchema);
