const mongoose = require("../config/dbConfig")

const reportSchema = mongoose.Schema({
  product: String,
  capacity: String,
  IMEI: String,
  price: {
    amount: {type: String, required: true},
    paymentType: {type: String, enum: ["cs", "gs", "tf"], required: true}
  }
})

const pmtData = mongoose.Schema({
  name: String,
  report: [reportSchema]
})

module.exports = mongoose.model("pmtData", pmtData)