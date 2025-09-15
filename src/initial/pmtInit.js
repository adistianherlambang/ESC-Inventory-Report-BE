const { createPmtReport } = require("../services/pmtServices")

async function run() {
  try{
    const data = await createPmtReport({
      name: "adi",
      report: [
        {
          product: "Samsung A16",
          capacity: "128GB",
          IMEI: "123456789",
          price: { amount: "2500000", paymentType: "cs" }
        }
      ]
    })
  } catch(err) {
    console.error(err)
    process.exit(1)
  }
}

run()