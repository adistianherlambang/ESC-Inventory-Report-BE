const { createUser } = require("../services/userServices")

async function run() {
  try {
    const user = await createUser({ name: "user dua", unique: "Dua", role: "pmt" })
    console.log("Initial user created:", user)
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

run()