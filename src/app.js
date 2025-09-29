const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

const mongoose = require("./config/dbConfig")
const authRouter = require("./routes/auth")
const pmtData = require("./data/pmtData")
const productData = require("./data/productData")
const user = require("./data/user")

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}))

app.use("/api/auth", authRouter)

app.use("/pmt", pmtData)

app.use("/product", productData)

app.use("/user", user)

app.listen(PORT, () => {
  console.log('jalan di port', PORT)
})