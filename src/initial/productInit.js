const { createProduct } = require("../services/productServices")

async function run() {
  try {
    const produk = await createProduct({
      brand: "samsung",
      product: "samsung a16",
      capacity: "8/128",
      IMEI: [
        "123",
        "456"
      ]
    })
    console.log("initial product created" + produk)
    process.exit(0)
  } catch(err) {
    throw new Error("gagal create produk" + err.message)
  }
}

run()