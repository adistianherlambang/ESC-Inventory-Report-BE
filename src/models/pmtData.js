const mongoose = require("../config/dbConfig")

const reportSchema = mongoose.Schema({
  product: String,
  capacity: String,
  IMEI: String,
  price: {
    amount: {type: Number, required: true},
    paymentType: {type: String, enum: ["cs", "gs", "tf"], required: true}
  },
  createdAt: String
})

const pmtData = mongoose.Schema({
  name: String,
  brand: String,
  report: [reportSchema],
})

module.exports = mongoose.model("pmtData", pmtData)