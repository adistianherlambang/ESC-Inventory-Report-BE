const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/ESC")

mongoose.connection.on("connected", () => {
  console.log("mongo konek")
})

mongoose.connection.on("error", (err) => {
  console.log(`mongo error ${err}`)
})

module.exports = mongoose