const express = require("express")
const router = express.Router()
const { getAllProduct, createProduct } = require("../services/productServices")

router.get("/getall", async (req, res) => {
  try {
    const data = await getAllProduct()
    res.json(data)
  } catch(err) {
    res.status(500).json({message: err.message})
  }
})

module.exports = router