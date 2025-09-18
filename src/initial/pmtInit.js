const { createPmtReport } = require("../services/pmtServices")

async function run() {
  const now = new Date()
  try{
    const data = await createPmtReport({
      name: "user tiga",
      brand: "realme",
      report: [
        {
          product: "c71",
          capacity: "128GB",
          IMEI: "123456789",
          price: { amount: 2500000, paymentType: "cs" },
          createdAt: now.toISOString().split("T")[0],
        }
      ]
    })
    console.log("data : " + data)
    process.exit(0)
  } catch(err) {
    console.error(err)
  }
}

run()