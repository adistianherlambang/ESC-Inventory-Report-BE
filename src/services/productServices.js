const allProduct = require("../models/product")

async function getAllProduct() {
  try {
    return await allProduct.find()   // ambil semua data
  } catch (err) {
    throw new Error("gagal mengambil data: " + err.message)
  }
}
async function createProduct(data) {
  try {
    const createProduct = new allProduct(data)
    const saveProduct = createProduct.save()
    return saveProduct
  } catch (err) {
    throw new Error("gagal create produk" + err.message)
  }
}

module.exports = { getAllProduct, createProduct }