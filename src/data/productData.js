const express = require("express")
const router = express.Router()
const { getAllProduct, getProductByBrand, createProduct, addImei } = require("../services/productServices")

router.get("/getall", async (req, res) => {
  try {
    const data = await getAllProduct()
    res.json(data)
  } catch(err) {
    res.status(500).json({message: err.message})
  }
})

router.get("/getbybrand", async(req, res) => {
  try {
    const {brand} = req.query
    const data = await getProductByBrand(brand)
    if(!data || data.length === 0) {
      return res.status(404).json({message: "Produk tidak ditemukan"})
    }
    return res.json(data)
  } catch(err) {
    res.status(500).json({message: err.message})
  }
})

router.post("/create", async(req, res) => {
  try {
    const data = await createProduct(req.body)
    res.status(201).json(data)
  } catch(err) {
    res.status(500).json({message: err.message})
  }
})


router.post("/add-imei/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { imei } = req.body

    const data = await addImei(id, imei)
    if (!data) {
      return res.status(404).json({ message: "Produk tidak ditemukan" })
    }
    res.json(data)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router