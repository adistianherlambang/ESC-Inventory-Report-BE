const mongoose = require("../config/dbConfig")

const allProduct = mongoose.Schema({
  brand: { type: String, index: true},
  product: String,
  capacity: String,
  color: String,
  IMEI: [String]
})

module.exports = mongoose.model("allProduct", allProduct)