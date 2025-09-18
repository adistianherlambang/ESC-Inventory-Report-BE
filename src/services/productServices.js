const allProduct = require("../models/product")

async function getAllProduct() {
  try {
    return await allProduct.find()   // ambil semua data
  } catch (err) {
    throw new Error("gagal mengambil data: " + err.message)
  }
}

async function getProductByBrand(brand) {
  try {
    const data = await allProduct.find({brand})
    return data
  } catch(err) {
    throw new Error("Gagal mengambil data: " + err.message)
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

async function addImei(productId, imei) {
  try {
    const updated = await allProduct.findByIdAndUpdate(
      productId,
      { $push: { IMEI: imei } },
      { new: true }  // return data terbaru setelah update
    )
    return updated
  } catch (err) {
    throw new Error("gagal menambahkan IMEI: " + err.message)
  }
}
module.exports = { getAllProduct, createProduct, getProductByBrand, addImei }