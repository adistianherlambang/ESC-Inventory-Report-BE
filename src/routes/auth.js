const express = require("express")
const router = express.Router()
const { getUserByUnique, createUser } = require("../services/userServices")

router.post("/register", async (req, res) => {
  try {
    const user = await createUser(req.body)
    res.json(user)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
})

router.post("/login", async (req, res) => {
  const { unique } = req.body
  try {
    const user = await getUserByUnique(unique)
    if (!user) return res.status(404).json({message: "user gak ada"})
    res.json(user)
  } catch (err) {
    res.status(500).json({message: "server error"})
  }
})

module.exports = router