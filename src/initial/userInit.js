const { createUser } = require("../services/userServices")

async function run() {
  try {
    const user = await createUser({ name: "adis", unique: "b", role: "admin" })
    console.log("Initial user created:", user)
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

run()