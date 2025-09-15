const mongoose = require("../config/dbConfig")

const userSchema = new mongoose.Schema({
  name: String,
  unique: String,
  brand: String,
  role: {
    type: String,
    enum: ["pmt", "fl", "admin"],
    default: "pmt"
  },
})

module.exports = mongoose.model("User", userSchema)

